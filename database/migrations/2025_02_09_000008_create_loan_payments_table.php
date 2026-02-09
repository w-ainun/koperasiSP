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
        Schema::create('loan_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('loan_id')->constrained()->onDelete('cascade');
            $table->foreignId('loan_installment_id')->nullable()->constrained()->onDelete('set null');
            $table->string('payment_number', 30)->unique();
            $table->decimal('payment_amount', 15, 2);
            $table->decimal('principal_paid', 15, 2);
            $table->decimal('interest_paid', 15, 2);
            $table->decimal('late_fee_paid', 15, 2)->default(0);
            $table->enum('payment_method', ['cash', 'transfer', 'virtual_account', 'ewallet', 'payment_gateway', 'deduction_from_savings']);
            $table->string('payment_reference', 100)->nullable();
            $table->string('payment_proof_path')->nullable();
            $table->date('payment_date');
            $table->text('notes')->nullable();
            $table->enum('status', ['pending', 'verified', 'rejected'])->default('pending');
            $table->foreignId('processed_by')->nullable()->constrained('users');
            $table->timestamp('processed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['loan_id', 'payment_date'], 'idx_lp_loan_date');
            $table->index('payment_number', 'idx_lp_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_payments');
    }
};
