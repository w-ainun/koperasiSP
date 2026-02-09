<?php

namespace Database\Factories;

use App\Models\Loan;
use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Collateral>
 */
class CollateralFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = fake()->randomElement(['vehicle', 'property', 'gold', 'electronics']);
        $marketValue = fake()->randomFloat(2, 10000000, 100000000);
        $appraisalValue = $marketValue * 0.8; // 80% of market value
        $ltvRatio = fake()->randomFloat(2, 70, 90);

        return [
            'loan_id' => Loan::factory(),
            'member_id' => Member::factory(),
            'collateral_number' => 'COL' . fake()->unique()->numerify('##########'),
            'category' => $category,
            'item_name' => $this->getItemNameByCategory($category),
            'description' => fake()->sentence(),
            'owner_name_on_document' => fake()->name(),
            'document_number' => fake()->numerify('DOC-################'),
            'document_expiry_date' => fake()->dateTimeBetween('now', '+10 years'),
            'market_value' => $marketValue,
            'appraisal_value' => $appraisalValue,
            'loan_to_value_ratio' => $ltvRatio,
            'appraisal_notes' => fake()->sentence(),
            'appraised_by' => User::factory()->creditAnalyst(),
            'appraisal_date' => fake()->dateTimeBetween('-6 months', 'now'),
            'condition' => fake()->randomElement(['excellent', 'good', 'fair']),
            'status' => 'held',
            'handover_date' => fake()->dateTimeBetween('-6 months', 'now'),
            'received_by' => User::factory()->admin(),
            'storage_location' => fake()->randomElement(['Vault A', 'Vault B', 'Storage Room 1', 'Safe Box 101']),
        ];
    }

    /**
     * Get item name based on category.
     */
    private function getItemNameByCategory(string $category): string
    {
        return match ($category) {
            'vehicle' => fake()->randomElement(['Honda Beat 2020', 'Toyota Avanza 2019', 'Yamaha NMAX 2021', 'Suzuki Ertiga 2020']),
            'property' => fake()->randomElement(['Rumah 2 Lantai', 'Tanah 200m²', 'Apartemen Studio', 'Ruko 3 Lantai']),
            'gold' => fake()->randomElement(['Emas Batangan 24K', 'Perhiasan Emas', 'Emas Antam']),
            'electronics' => fake()->randomElement(['Laptop MacBook Pro', 'iPhone 14 Pro', 'Samsung TV 55"']),
            default => 'Unknown Item',
        };
    }

    /**
     * Indicate that the collateral is a vehicle.
     */
    public function vehicle(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'vehicle',
            'item_name' => 'Honda Beat 2020',
            'bpkb_number' => fake()->numerify('BPKB-################'),
            'chassis_number' => fake()->bothify('MH###########?????'),
            'engine_number' => fake()->bothify('JF###########'),
            'vehicle_brand' => fake()->randomElement(['Honda', 'Toyota', 'Yamaha', 'Suzuki']),
            'vehicle_type' => fake()->randomElement(['Motorcycle', 'Car', 'Van']),
            'vehicle_year' => fake()->numberBetween(2015, 2024),
        ]);
    }

    /**
     * Indicate that the collateral is property.
     */
    public function property(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'property',
            'item_name' => 'Rumah 2 Lantai',
            'certificate_number' => fake()->numerify('SHM-####-####'),
            'certificate_type' => fake()->randomElement(['shm', 'hgb', 'hgu']),
            'land_area' => fake()->randomFloat(2, 50, 500),
            'building_area' => fake()->randomFloat(2, 40, 400),
            'property_address' => fake()->address(),
        ]);
    }

    /**
     * Indicate that the collateral is gold.
     */
    public function gold(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'gold',
            'item_name' => 'Emas Batangan 24K',
            'gold_weight' => fake()->randomFloat(2, 10, 500),
            'gold_purity' => fake()->randomElement(['24K', '22K', '99.9%', '99.99%']),
            'gold_certificate_number' => fake()->numerify('GOLD-####-####'),
        ]);
    }

    /**
     * Indicate that the collateral is released.
     */
    public function released(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'released',
            'release_date' => fake()->dateTimeBetween('-3 months', 'now'),
            'released_by' => User::factory()->admin(),
            'release_notes' => fake()->sentence(),
        ]);
    }
}
