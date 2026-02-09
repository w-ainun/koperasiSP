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
        Schema::create('collateral_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('collateral_id')->constrained()->onDelete('cascade');
            $table->enum('document_type', ['photo_front', 'photo_back', 'photo_side', 'photo_interior', 'certificate', 'bpkb', 'other']);
            $table->string('file_name');
            $table->string('file_path');
            $table->string('file_mime', 100);
            $table->integer('file_size');
            $table->text('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('collateral_documents');
    }
};
