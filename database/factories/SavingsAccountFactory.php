<?php

namespace Database\Factories;

use App\Models\Member;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SavingsAccount>
 */
class SavingsAccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = fake()->randomElement(['pokok', 'wajib', 'sukarela']);
        
        return [
            'member_id' => Member::factory(),
            'account_number' => 'SAV' . fake()->unique()->numerify('##########'),
            'savings_type' => $type,
            'balance' => fake()->randomFloat(2, 100000, 50000000),
            'interest_rate' => $this->getInterestRateByType($type),
            'opened_date' => fake()->dateTimeBetween('-2 years', 'now'),
            'status' => 'active',
        ];
    }

    /**
     * Get interest rate based on savings type.
     */
    private function getInterestRateByType(string $type): float
    {
        return match ($type) {
            'pokok' => 3.0,
            'wajib' => 3.0,
            'sukarela' => 5.0,
            default => 3.0,
        };
    }

    /**
     * Indicate that the account is for principal savings.
     */
    public function pokok(): static
    {
        return $this->state(fn (array $attributes) => [
            'savings_type' => 'pokok',
            'interest_rate' => 3.0,
        ]);
    }

    /**
     * Indicate that the account is for mandatory savings.
     */
    public function wajib(): static
    {
        return $this->state(fn (array $attributes) => [
            'savings_type' => 'wajib',
            'interest_rate' => 3.0,
        ]);
    }

    /**
     * Indicate that the account is for voluntary savings.
     */
    public function sukarela(): static
    {
        return $this->state(fn (array $attributes) => [
            'savings_type' => 'sukarela',
            'interest_rate' => 5.0,
        ]);
    }

    /**
     * Indicate that the account is frozen.
     */
    public function frozen(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'frozen',
        ]);
    }

    /**
     * Indicate that the account is closed.
     */
    public function closed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'closed',
            'closed_date' => fake()->dateTimeBetween('-1 year', 'now'),
        ]);
    }
}
