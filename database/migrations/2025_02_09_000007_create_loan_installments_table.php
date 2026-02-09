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
        Schema::create('loan_installments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('loan_id')->constrained()->onDelete('cascade');
            $table->integer('installment_number');
            $table->date('due_date');
            $table->decimal('principal_amount', 15, 2);
            $table->decimal('interest_amount', 15, 2);
            $table->decimal('total_amount', 15, 2);
            $table->decimal('outstanding_balance', 15, 2); // Sisa pinjaman setelah cicilan ini
            $table->decimal('paid_amount', 15, 2)->default(0);
            $table->decimal('late_fee', 15, 2)->default(0);
            $table->integer('days_overdue')->default(0);
            $table->date('paid_date')->nullable();
            $table->enum('status', ['pending', 'paid', 'partial', 'overdue', 'waived'])->default('pending');
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['loan_id', 'installment_number'], 'idx_li_loan_inst_num');
            $table->index(['due_date', 'status'], 'idx_li_due_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_installments');
    }
};
