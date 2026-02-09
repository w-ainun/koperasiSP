<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\Loan;
use App\Models\LoanInstallment;
use App\Models\Collateral;
use App\Models\User;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class LoanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $members = Member::limit(15)->get(); // Create loans for 15 members
        $analyst = User::where('role', 'credit_analyst')->first();
        $admin = User::where('role', 'admin')->first();
        $teller = User::where('role', 'teller')->first();

        foreach ($members as $index => $member) {
            $principal = rand(5000000, 30000000);
            $interestRate = 12.0; // 12% per year
            $tenor = [12, 18, 24, 36][array_rand([12, 18, 24, 36])];
            $interestType = 'flat';
            
            // Calculate flat interest
            $totalInterest = ($principal * $interestRate * $tenor) / (12 * 100);
            $totalAmount = $principal + $totalInterest;
            $monthlyInstallment = $totalAmount / $tenor;
            
            $adminFee = $principal * 0.02;
            $insuranceFee = $principal * 0.01;
            $disbursedAmount = $principal - $adminFee - $insuranceFee;
            
            $applicationDate = now()->subMonths(rand(6, 12));
            $approvedDate = (clone $applicationDate)->addDays(7);
            $disbursedDate = (clone $approvedDate)->addDays(3);

            // Create loan
            $loan = Loan::create([
                'member_id' => $member->id,
                'loan_number' => 'LN' . now()->format('Ym') . str_pad($index + 1, 6, '0', STR_PAD_LEFT),
                'loan_category' => ['productive', 'consumptive'][array_rand(['productive', 'consumptive'])],
                'loan_purpose' => 'Modal Usaha / Kebutuhan Konsumtif',
                'principal_amount' => $principal,
                'interest_rate' => $interestRate,
                'interest_type' => $interestType,
                'tenor_months' => $tenor,
                'monthly_installment' => $monthlyInstallment,
                'admin_fee' => $adminFee,
                'insurance_fee' => $insuranceFee,
                'total_amount' => $totalAmount,
                'disbursed_amount' => $disbursedAmount,
                'application_date' => $applicationDate,
                'approved_date' => $approvedDate,
                'disbursed_date' => $disbursedDate,
                'disbursement_method' => 'savings_account',
                'outstanding_balance' => $totalAmount,
                'paid_installments' => 0,
                'debt_to_income_ratio' => rand(25, 35),
                'credit_score' => rand(650, 800),
                'status' => 'active',
                'reviewed_by' => $analyst->id,
                'reviewed_at' => $approvedDate,
                'approved_by' => $admin->id,
                'disbursed_by' => $teller->id,
            ]);

            // Generate installment schedule
            $dueDate = (clone $disbursedDate)->addMonth();
            $remainingBalance = $totalAmount;
            
            for ($i = 1; $i <= $tenor; $i++) {
                $principalPortion = $principal / $tenor;
                $interestPortion = $totalInterest / $tenor;
                $remainingBalance -= $monthlyInstallment;

                LoanInstallment::create([
                    'loan_id' => $loan->id,
                    'installment_number' => $i,
                    'due_date' => $dueDate->copy(),
                    'principal_amount' => $principalPortion,
                    'interest_amount' => $interestPortion,
                    'total_amount' => $monthlyInstallment,
                    'outstanding_balance' => max(0, $remainingBalance),
                    'paid_amount' => 0,
                    'status' => 'pending',
                ]);

                $dueDate->addMonth();
            }

            // Create collateral for loans > 10 million
            if ($principal > 10000000) {
                Collateral::factory()
                    ->for($loan)
                    ->for($member)
                    ->vehicle()
                    ->create([
                        'appraised_by' => $analyst->id,
                        'received_by' => $admin->id,
                    ]);
            }
        }

        $this->command->info('Created 15 active loans with installment schedules and collaterals');
    }
}
