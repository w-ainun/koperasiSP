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
        Schema::create('shu_configurations', function (Blueprint $table) {
            $table->id();
            $table->integer('fiscal_year');
            $table->decimal('net_profit', 15, 2); // Laba bersih
            
            // Persentase alokasi (total harus 100%)
            $table->decimal('reserve_fund_percentage', 5, 2)->default(10); // Cadangan modal
            $table->decimal('member_capital_percentage', 5, 2)->default(25); // Jasa anggota (modal)
            $table->decimal('member_transaction_percentage', 5, 2)->default(25); // Jasa anggota (transaksi/pinjaman)
            $table->decimal('management_percentage', 5, 2)->default(15); // Dana pengurus
            $table->decimal('employee_percentage', 5, 2)->default(10); // Dana karyawan
            $table->decimal('education_percentage', 5, 2)->default(10); // Dana pendidikan
            $table->decimal('social_percentage', 5, 2)->default(5); // Dana sosial
            
            // Nilai alokasi (dalam rupiah)
            $table->decimal('reserve_fund_amount', 15, 2);
            $table->decimal('member_capital_amount', 15, 2);
            $table->decimal('member_transaction_amount', 15, 2);
            $table->decimal('management_amount', 15, 2);
            $table->decimal('employee_amount', 15, 2);
            $table->decimal('education_amount', 15, 2);
            $table->decimal('social_amount', 15, 2);
            
            $table->enum('status', ['draft', 'calculated', 'approved', 'distributed'])->default('draft');
            $table->date('calculation_date')->nullable();
            $table->date('approval_date')->nullable();
            $table->date('distribution_date')->nullable();
            $table->foreignId('calculated_by')->nullable()->constrained('users');
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->timestamps();
            $table->softDeletes();
            
            $table->unique('fiscal_year');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shu_configurations');
    }
};
