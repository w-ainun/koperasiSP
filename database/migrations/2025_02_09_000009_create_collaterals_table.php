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
        Schema::create('collaterals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('loan_id')->constrained()->onDelete('cascade');
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->string('collateral_number', 30)->unique();
            $table->enum('category', ['vehicle', 'property', 'gold', 'electronics', 'other']);
            $table->string('item_name');
            $table->text('description')->nullable();
            
            // Data spesifik kendaraan
            $table->string('bpkb_number', 50)->nullable();
            $table->string('chassis_number', 50)->nullable();
            $table->string('engine_number', 50)->nullable();
            $table->string('vehicle_brand', 50)->nullable();
            $table->string('vehicle_type', 50)->nullable();
            $table->integer('vehicle_year')->nullable();
            
            // Data spesifik properti
            $table->string('certificate_number', 50)->nullable();
            $table->enum('certificate_type', ['shm', 'hgb', 'hgu', 'other'])->nullable(); // SHM=Sertifikat Hak Milik, HGB=Hak Guna Bangunan
            $table->decimal('land_area', 10, 2)->nullable(); // m2
            $table->decimal('building_area', 10, 2)->nullable(); // m2
            $table->text('property_address')->nullable();
            
            // Data spesifik emas/logam mulia
            $table->decimal('gold_weight', 10, 2)->nullable(); // gram
            $table->string('gold_purity', 10)->nullable(); // 24K, 99.9%, etc
            $table->string('gold_certificate_number', 50)->nullable();
            
            // Data umum
            $table->string('owner_name_on_document');
            $table->string('document_number', 50)->nullable();
            $table->date('document_expiry_date')->nullable();
            $table->decimal('market_value', 15, 2); // Nilai pasar
            $table->decimal('appraisal_value', 15, 2); // Nilai taksiran
            $table->decimal('loan_to_value_ratio', 5, 2); // LTV percentage
            $table->text('appraisal_notes')->nullable();
            $table->foreignId('appraised_by')->nullable()->constrained('users');
            $table->date('appraisal_date')->nullable();
            $table->enum('condition', ['excellent', 'good', 'fair', 'poor'])->default('good');
            $table->enum('status', ['held', 'released', 'auctioned', 'lost'])->default('held');
            $table->date('handover_date')->nullable();
            $table->date('release_date')->nullable();
            $table->foreignId('received_by')->nullable()->constrained('users');
            $table->foreignId('released_by')->nullable()->constrained('users');
            $table->text('storage_location')->nullable();
            $table->text('release_notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['loan_id', 'status'], 'idx_collateral_loan_status');
            $table->index('collateral_number', 'idx_collateral_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('collaterals');
    }
};
