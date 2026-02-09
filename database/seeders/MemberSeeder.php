<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Member;
use App\Models\MemberDocument;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get the demo member user
        $demoUser = User::where('email', 'member@kspsejahtera.com')->first();
        
        if ($demoUser) {
            // Create member profile for demo user
            $demoMember = Member::create([
                'user_id' => $demoUser->id,
                'member_number' => 'MBR000001',
                'nik' => '3201234567890001',
                'full_name' => 'Demo Member',
                'gender' => 'male',
                'place_of_birth' => 'Jakarta',
                'date_of_birth' => '1990-01-01',
                'address' => 'Jl. Contoh No. 123',
                'city' => 'Jakarta',
                'province' => 'DKI Jakarta',
                'postal_code' => '12345',
                'occupation' => 'Karyawan Swasta',
                'company_name' => 'PT. Contoh Indonesia',
                'monthly_income' => 10000000,
                'emergency_contact_name' => 'Emergency Contact',
                'emergency_contact_phone' => '081234567896',
                'emergency_contact_relation' => 'Spouse',
                'registration_date' => now()->subMonths(6),
                'approved_date' => now()->subMonths(6)->addDays(1),
                'approved_by' => User::where('role', 'admin')->first()->id,
            ]);

            // Create some documents for demo member
            MemberDocument::create([
                'member_id' => $demoMember->id,
                'document_type' => 'ktp',
                'file_name' => 'ktp.jpg',
                'file_path' => 'documents/members/ktp.jpg',
                'file_mime' => 'image/jpeg',
                'file_size' => 245760,
                'verification_status' => 'verified',
                'verified_by' => User::where('role', 'admin')->first()->id,
                'verified_at' => now()->subMonths(6)->addDays(1),
            ]);

            $this->command->info('Created demo member profile with documents');
        }

        // Create additional random members
        $admin = User::where('role', 'admin')->first();
        
        User::factory(20)
            ->has(
                Member::factory()
                    ->state(function (array $attributes, User $user) use ($admin) {
                        return [
                            'approved_by' => $admin->id,
                        ];
                    })
            )
            ->create();

        $this->command->info('Created 20 additional members with profiles');
    }
}
