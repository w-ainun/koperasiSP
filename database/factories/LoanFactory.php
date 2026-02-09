<?php

namespace Database\Factories;

use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Loan>
 */
class LoanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $principal = fake()->numberBetween(5000000, 50000000);
        $interestRate = fake()->randomFloat(2, 8, 18);
        $tenor = fake()->randomElement([6, 12, 18, 24, 36, 48, 60]);
        $interestType = fake()->randomElement(['flat', 'effective', 'annuity']);
        
        // Calculate monthly installment (simplified flat calculation)
        $totalInterest = ($principal * $interestRate * $tenor) / (12 * 100);
        $totalAmount = $principal + $totalInterest;
        $monthlyInstallment = $totalAmount / $tenor;
        
        $adminFee = $principal * 0.02;
        $insuranceFee = $principal * 0.01;
        $disbursedAmount = $principal - $adminFee - $insuranceFee;
        
        $applicationDate = fake()->dateTimeBetween('-1 year', '-1 month');
        $approvedDate = fake()->dateTimeBetween($applicationDate, 'now');
        $disbursedDate = fake()->dateTimeBetween($approvedDate, 'now');

        return [
            'member_id' => Member::factory(),
            'loan_number' => 'LN' . fake()->unique()->numerify('##########'),
            'loan_category' => fake()->randomElement(['productive', 'consumptive']),
            'loan_purpose' => fake()->sentence(),
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
            'disbursement_method' => fake()->randomElement(['savings_account', 'bank_transfer']),
            'disbursement_account' => fake()->numerify('##########'),
            'outstanding_balance' => $totalAmount,
            'paid_installments' => 0,
            'debt_to_income_ratio' => fake()->randomFloat(2, 20, 40),
            'credit_score' => fake()->numberBetween(600, 850),
            'status' => 'active',
            'reviewed_by' => User::factory()->creditAnalyst(),
            'reviewed_at' => $approvedDate,
            'approved_by' => User::factory()->admin(),
            'disbursed_by' => User::factory()->teller(),
        ];
    }

    /**
     * Indicate that the loan is submitted and pending review.
     */
    public function submitted(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'submitted',
            'approved_date' => null,
            'disbursed_date' => null,
            'reviewed_by' => null,
            'reviewed_at' => null,
            'approved_by' => null,
            'disbursed_by' => null,
        ]);
    }

    /**
     * Indicate that the loan is under review.
     */
    public function underReview(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'under_review',
            'approved_date' => null,
            'disbursed_date' => null,
            'approved_by' => null,
            'disbursed_by' => null,
        ]);
    }

    /**
     * Indicate that the loan is approved but not disbursed.
     */
    public function approved(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'approved',
            'disbursed_date' => null,
            'disbursed_by' => null,
        ]);
    }

    /**
     * Indicate that the loan is paid off.
     */
    public function paidOff(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'paid_off',
            'outstanding_balance' => 0,
            'paid_installments' => $attributes['tenor_months'],
        ]);
    }

    /**
     * Indicate that the loan is defaulted.
     */
    public function defaulted(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'defaulted',
        ]);
    }
}
