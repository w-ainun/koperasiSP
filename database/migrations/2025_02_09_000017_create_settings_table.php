<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('key', 100)->unique();
            $table->text('value')->nullable();
            $table->enum('type', ['string', 'integer', 'decimal', 'boolean', 'json', 'date'])->default('string');
            $table->string('group', 50)->default('general'); // e.g., 'general', 'loan', 'savings', 'fee'
            $table->string('label');
            $table->text('description')->nullable();
            $table->boolean('is_public')->default(false); // Apakah bisa diakses member atau hanya admin
            $table->timestamps();
        });

        // Insert default settings
        DB::table('settings')->insert([
            // Loan settings
            ['key' => 'loan_max_dti_ratio', 'value' => '40', 'type' => 'integer', 'group' => 'loan', 'label' => 'Maximum DTI Ratio (%)', 'description' => 'Maximum Debt-to-Income ratio allowed', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_min_amount', 'value' => '1000000', 'type' => 'decimal', 'group' => 'loan', 'label' => 'Minimum Loan Amount', 'description' => 'Minimum loan principal amount', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_max_amount', 'value' => '100000000', 'type' => 'decimal', 'group' => 'loan', 'label' => 'Maximum Loan Amount', 'description' => 'Maximum loan principal amount', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_min_tenor', 'value' => '6', 'type' => 'integer', 'group' => 'loan', 'label' => 'Minimum Tenor (months)', 'description' => 'Minimum loan tenor in months', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_max_tenor', 'value' => '60', 'type' => 'integer', 'group' => 'loan', 'label' => 'Maximum Tenor (months)', 'description' => 'Maximum loan tenor in months', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_default_interest_rate', 'value' => '12', 'type' => 'decimal', 'group' => 'loan', 'label' => 'Default Interest Rate (%)', 'description' => 'Default annual interest rate for loans', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_admin_fee_percentage', 'value' => '2', 'type' => 'decimal', 'group' => 'loan', 'label' => 'Admin Fee (%)', 'description' => 'Loan admin fee percentage', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_insurance_fee_percentage', 'value' => '1', 'type' => 'decimal', 'group' => 'loan', 'label' => 'Insurance Fee (%)', 'description' => 'Loan insurance fee percentage', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'loan_late_fee_per_day', 'value' => '5000', 'type' => 'decimal', 'group' => 'loan', 'label' => 'Late Fee Per Day', 'description' => 'Daily late payment fee', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            
            // Savings settings
            ['key' => 'savings_pokok_required', 'value' => '1000000', 'type' => 'decimal', 'group' => 'savings', 'label' => 'Required Principal Savings', 'description' => 'Required principal savings (Simpanan Pokok)', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'savings_wajib_monthly', 'value' => '100000', 'type' => 'decimal', 'group' => 'savings', 'label' => 'Monthly Mandatory Savings', 'description' => 'Required monthly mandatory savings (Simpanan Wajib)', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'savings_sukarela_min_deposit', 'value' => '50000', 'type' => 'decimal', 'group' => 'savings', 'label' => 'Minimum Voluntary Deposit', 'description' => 'Minimum deposit amount for voluntary savings', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'savings_sukarela_min_withdrawal', 'value' => '50000', 'type' => 'decimal', 'group' => 'savings', 'label' => 'Minimum Voluntary Withdrawal', 'description' => 'Minimum withdrawal amount for voluntary savings', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'savings_interest_rate_pokok', 'value' => '3', 'type' => 'decimal', 'group' => 'savings', 'label' => 'Interest Rate - Principal (%)', 'description' => 'Annual interest rate for principal savings', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'savings_interest_rate_wajib', 'value' => '3', 'type' => 'decimal', 'group' => 'savings', 'label' => 'Interest Rate - Mandatory (%)', 'description' => 'Annual interest rate for mandatory savings', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'savings_interest_rate_sukarela', 'value' => '5', 'type' => 'decimal', 'group' => 'savings', 'label' => 'Interest Rate - Voluntary (%)', 'description' => 'Annual interest rate for voluntary savings', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            
            // General settings
            ['key' => 'company_name', 'value' => 'KSP Sejahtera Abadi', 'type' => 'string', 'group' => 'general', 'label' => 'Company Name', 'description' => 'Cooperative name', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'company_email', 'value' => 'info@kspsejahtera.com', 'type' => 'string', 'group' => 'general', 'label' => 'Company Email', 'description' => 'Contact email', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'company_phone', 'value' => '021-12345678', 'type' => 'string', 'group' => 'general', 'label' => 'Company Phone', 'description' => 'Contact phone', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'company_address', 'value' => 'Jakarta, Indonesia', 'type' => 'string', 'group' => 'general', 'label' => 'Company Address', 'description' => 'Office address', 'is_public' => true, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
