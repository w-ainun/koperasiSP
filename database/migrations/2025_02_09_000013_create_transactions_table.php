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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->string('transaction_number', 30)->unique();
            $table->enum('transaction_category', ['savings', 'loan', 'shu', 'fee', 'penalty', 'other']);
            $table->enum('transaction_type', ['credit', 'debit']); // credit = masuk, debit = keluar
            $table->decimal('amount', 15, 2);
            $table->string('reference_type', 50)->nullable(); // Model class name (e.g., 'App\Models\Loan')
            $table->unsignedBigInteger('reference_id')->nullable(); // ID of related model
            $table->text('description');
            $table->date('transaction_date');
            $table->foreignId('processed_by')->nullable()->constrained('users');
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['member_id', 'transaction_date'], 'idx_trans_member_date');
            $table->index(['reference_type', 'reference_id'], 'idx_trans_ref_type_id');
            $table->index('transaction_number', 'idx_trans_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
