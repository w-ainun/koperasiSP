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
        Schema::create('shu_distributions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shu_configuration_id')->constrained()->onDelete('cascade');
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->integer('fiscal_year');
            
            // Data partisipasi anggota
            $table->decimal('average_principal_savings', 15, 2)->default(0); // Rata-rata simpanan pokok
            $table->decimal('average_mandatory_savings', 15, 2)->default(0); // Rata-rata simpanan wajib
            $table->decimal('total_capital_contribution', 15, 2)->default(0); // Total kontribusi modal
            $table->decimal('total_interest_paid', 15, 2)->default(0); // Total bunga pinjaman yang dibayar
            $table->decimal('total_transaction_volume', 15, 2)->default(0); // Volume transaksi
            $table->integer('months_active')->default(12); // Berapa bulan aktif dalam tahun buku
            $table->boolean('has_arrears')->default(false); // Ada tunggakan atau tidak
            
            // Alokasi SHU
            $table->decimal('capital_share_amount', 15, 2)->default(0); // Jasa modal
            $table->decimal('transaction_share_amount', 15, 2)->default(0); // Jasa transaksi/pinjaman
            $table->decimal('total_shu_amount', 15, 2)->default(0); // Total SHU yang diterima
            
            // Pajak
            $table->decimal('tax_percentage', 5, 2)->default(0); // Persentase pajak (biasanya 10% untuk SHU > threshold)
            $table->decimal('tax_amount', 15, 2)->default(0);
            $table->decimal('net_shu_amount', 15, 2)->default(0); // SHU bersih setelah pajak
            
            // Status pembayaran
            $table->enum('payment_status', ['pending', 'transferred_to_savings', 'paid', 'cancelled'])->default('pending');
            $table->date('payment_date')->nullable();
            $table->enum('payment_method', ['transfer_to_savings', 'bank_transfer', 'cash'])->nullable();
            $table->string('payment_reference', 100)->nullable();
            $table->foreignId('processed_by')->nullable()->constrained('users');
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['shu_configuration_id', 'member_id'], 'idx_shu_config_member');
            $table->index('fiscal_year', 'idx_shu_fiscal_year');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shu_distributions');
    }
};
