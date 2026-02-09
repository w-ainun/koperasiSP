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
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->string('loan_number', 30)->unique();
            $table->enum('loan_category', ['productive', 'consumptive']);
            $table->text('loan_purpose')->nullable();
            $table->decimal('principal_amount', 15, 2); // Jumlah pokok pinjaman
            $table->decimal('interest_rate', 5, 2); // Bunga (percentage)
            $table->enum('interest_type', ['flat', 'effective', 'annuity'])->default('flat');
            $table->integer('tenor_months'); // Tenor dalam bulan
            $table->decimal('monthly_installment', 15, 2); // Angsuran per bulan
            $table->decimal('admin_fee', 15, 2)->default(0);
            $table->decimal('insurance_fee', 15, 2)->default(0);
            $table->decimal('total_amount', 15, 2); // Total yang harus dibayar
            $table->decimal('disbursed_amount', 15, 2); // Dana yang diterima (setelah dipotong biaya)
            $table->date('application_date');
            $table->date('approved_date')->nullable();
            $table->date('disbursed_date')->nullable();
            $table->enum('disbursement_method', ['savings_account', 'bank_transfer'])->nullable();
            $table->string('disbursement_account', 50)->nullable();
            $table->decimal('outstanding_balance', 15, 2)->default(0); // Sisa pinjaman
            $table->integer('paid_installments')->default(0); // Angsuran yang sudah dibayar
            $table->decimal('debt_to_income_ratio', 5, 2)->nullable(); // DTI ratio
            $table->integer('credit_score')->nullable()->comment('Internal credit score');
            $table->enum('status', ['draft', 'submitted', 'under_review', 'approved', 'rejected', 'disbursed', 'active', 'paid_off', 'defaulted'])->default('draft');
            $table->text('rejection_reason')->nullable();
            $table->foreignId('reviewed_by')->nullable()->constrained('users');
            $table->timestamp('reviewed_at')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->foreignId('disbursed_by')->nullable()->constrained('users');
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['member_id', 'status'], 'idx_loans_member_status');
            $table->index('loan_number', 'idx_loans_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
