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
        Schema::create('savings_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('savings_account_id')->constrained()->onDelete('cascade');
            $table->string('transaction_number', 30)->unique();
            $table->enum('transaction_type', ['deposit', 'withdrawal', 'interest', 'admin_fee', 'transfer_in', 'transfer_out']);
            $table->decimal('amount', 15, 2);
            $table->decimal('balance_before', 15, 2);
            $table->decimal('balance_after', 15, 2);
            $table->enum('payment_method', ['cash', 'transfer', 'virtual_account', 'ewallet', 'payment_gateway'])->nullable();
            $table->string('payment_reference', 100)->nullable();
            $table->string('payment_proof_path')->nullable();
            $table->text('description')->nullable();
            $table->enum('status', ['pending', 'success', 'failed', 'cancelled'])->default('pending');
            $table->foreignId('processed_by')->nullable()->constrained('users');
            $table->timestamp('processed_at')->nullable();
            $table->text('rejection_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['savings_account_id', 'transaction_type', 'status'], 'idx_st_account_type_status');
            $table->index('transaction_number', 'idx_st_transaction_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('savings_transactions');
    }
};
