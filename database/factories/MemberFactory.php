<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $registrationDate = fake()->dateTimeBetween('-2 years', '-1 month');
        $approvedDate = fake()->dateTimeBetween($registrationDate, 'now');

        return [
            'user_id' => User::factory(),
            'member_number' => 'MBR' . fake()->unique()->numerify('######'),
            'nik' => fake()->unique()->numerify('################'),
            'full_name' => fake()->name(),
            'gender' => fake()->randomElement(['male', 'female']),
            'place_of_birth' => fake()->city(),
            'date_of_birth' => fake()->dateTimeBetween('-60 years', '-17 years'),
            'address' => fake()->address(),
            'city' => fake()->city(),
            'province' => fake()->randomElement(['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten']),
            'postal_code' => fake()->postcode(),
            'occupation' => fake()->jobTitle(),
            'company_name' => fake()->company(),
            'monthly_income' => fake()->randomFloat(2, 3000000, 20000000),
            'emergency_contact_name' => fake()->name(),
            'emergency_contact_phone' => fake()->phoneNumber(),
            'emergency_contact_relation' => fake()->randomElement(['Spouse', 'Parent', 'Sibling', 'Child']),
            'registration_date' => $registrationDate,
            'approved_date' => $approvedDate,
            'approved_by' => User::factory()->admin(),
        ];
    }

    /**
     * Indicate that the member is pending approval.
     */
    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'approved_date' => null,
            'approved_by' => null,
        ]);
    }

    /**
     * Indicate that the member was rejected.
     */
    public function rejected(): static
    {
        return $this->state(fn (array $attributes) => [
            'approved_date' => null,
            'approved_by' => null,
            'rejection_reason' => fake()->sentence(),
        ]);
    }
}
