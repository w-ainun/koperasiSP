<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin KSP',
            'email' => 'admin@kspsejahtera.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'status' => 'active', 
            'phone' => '081234567890',
            'email_verified_at' => now(),
        ]);

        // Create teller user
        User::create([
            'name' => 'Teller 1',
            'email' => 'teller@kspsejahtera.com',
            'password' => Hash::make('password'),
            'role' => 'teller',
            'status' => 'active',
            'phone' => '081234567891',
            'email_verified_at' => now(),
        ]);

        // Create credit analyst user
        User::create([
            'name' => 'Credit Analyst',
            'email' => 'analyst@kspsejahtera.com',
            'password' => Hash::make('password'),
            'role' => 'credit_analyst',
            'status' => 'active',
            'phone' => '081234567892',
            'email_verified_at' => now(),
        ]);

        // Create collector user
        User::create([
            'name' => 'Collector 1',
            'email' => 'collector@kspsejahtera.com',
            'password' => Hash::make('password'),
            'role' => 'collector',
            'status' => 'active',
            'phone' => '081234567893',
            'email_verified_at' => now(),
        ]);

        // Create management user
        User::create([
            'name' => 'Management',
            'email' => 'management@kspsejahtera.com',
            'password' => Hash::make('password'),
            'role' => 'management',
            'status' => 'active',
            'phone' => '081234567894',
            'email_verified_at' => now(),
        ]);

        // Create demo member user
        User::create([
            'name' => 'Demo Member',
            'email' => 'member@kspsejahtera.com',
            'password' => Hash::make('password'),
            'role' => 'member',
            'status' => 'active',
            'phone' => '081234567895',
            'email_verified_at' => now(),
        ]);

        $this->command->info('Created 6 default users (1 admin, 1 teller, 1 analyst, 1 collector, 1 management, 1 member)');
    }
}
