<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\SavingsAccount;
use App\Models\SavingsTransaction;
use App\Models\User;
use Illuminate\Database\Seeder;

class SavingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $members = Member::all();
        $teller = User::where('role', 'teller')->first();

        foreach ($members as $member) {
            // Create principal savings account (Simpanan Pokok)
            $pokokAccount = SavingsAccount::create([
                'member_id' => $member->id,
                'account_number' => 'SAV' . str_pad($member->id * 3 - 2, 10, '0', STR_PAD_LEFT),
                'savings_type' => 'pokok',
                'balance' => 1000000, // Required principal savings
                'interest_rate' => 3.0,
                'opened_date' => $member->registration_date,
                'status' => 'active',
            ]);

            // Create initial deposit transaction
            SavingsTransaction::create([
                'savings_account_id' => $pokokAccount->id,
                'transaction_number' => 'TRX' . str_pad($member->id * 3 - 2, 10, '0', STR_PAD_LEFT),
                'transaction_type' => 'deposit',
                'amount' => 1000000,
                'balance_before' => 0,
                'balance_after' => 1000000,
                'payment_method' => 'cash',
                'description' => 'Setoran Simpanan Pokok',
                'status' => 'success',
                'processed_by' => $teller->id,
                'processed_at' => $member->registration_date,
            ]);

            // Create mandatory savings account (Simpanan Wajib)
            $wajibAccount = SavingsAccount::create([
                'member_id' => $member->id,
                'account_number' => 'SAV' . str_pad($member->id * 3 - 1, 10, '0', STR_PAD_LEFT),
                'savings_type' => 'wajib',
                'balance' => rand(500000, 5000000),
                'interest_rate' => 3.0,
                'opened_date' => $member->registration_date,
                'status' => 'active',
            ]);

            // Create voluntary savings account (Simpanan Sukarela)
            if (rand(1, 100) > 30) { // 70% members have voluntary savings
                SavingsAccount::create([
                    'member_id' => $member->id,
                    'account_number' => 'SAV' . str_pad($member->id * 3, 10, '0', STR_PAD_LEFT),
                    'savings_type' => 'sukarela',
                    'balance' => rand(100000, 20000000),
                    'interest_rate' => 5.0,
                    'opened_date' => $member->registration_date,
                    'status' => 'active',
                ]);
            }
        }

        $this->command->info('Created savings accounts for all members');
    }
}
