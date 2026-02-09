<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Faq>
 */
class FaqFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category' => fake()->randomElement(['account', 'savings', 'loan', 'payment', 'shu', 'general']),
            'question' => fake()->sentence() . '?',
            'answer' => fake()->paragraph(),
            'order' => fake()->numberBetween(1, 100),
            'is_published' => true,
            'view_count' => fake()->numberBetween(0, 1000),
            'helpful_count' => fake()->numberBetween(0, 500),
        ];
    }

    /**
     * Indicate that the FAQ is unpublished.
     */
    public function unpublished(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_published' => false,
        ]);
    }
}
