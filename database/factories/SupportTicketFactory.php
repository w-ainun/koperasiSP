<?php

namespace Database\Factories;

use App\Models\Member;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SupportTicket>
 */
class SupportTicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = fake()->randomElement(['open', 'in_progress', 'waiting_member', 'resolved', 'closed']);

        return [
            'ticket_number' => 'TKT' . fake()->unique()->numerify('######'),
            'member_id' => Member::factory(),
            'category' => fake()->randomElement(['account', 'savings', 'loan', 'payment', 'technical', 'complaint', 'other']),
            'subject' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'priority' => fake()->randomElement(['low', 'medium', 'high', 'urgent']),
            'status' => $status,
        ];
    }

    /**
     * Indicate that the ticket is resolved.
     */
    public function resolved(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'resolved',
            'resolved_at' => fake()->dateTimeBetween('-1 month', 'now'),
            'resolution_notes' => fake()->paragraph(),
        ]);
    }

    /**
     * Indicate that the ticket is closed with rating.
     */
    public function closed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'closed',
            'resolved_at' => fake()->dateTimeBetween('-2 months', '-1 month'),
            'closed_at' => fake()->dateTimeBetween('-1 month', 'now'),
            'resolution_notes' => fake()->paragraph(),
            'satisfaction_rating' => fake()->numberBetween(1, 5),
            'satisfaction_feedback' => fake()->sentence(),
        ]);
    }
}
