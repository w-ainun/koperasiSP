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
        Schema::create('broadcasts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('message');
            $table->enum('type', ['announcement', 'promotion', 'warning', 'maintenance', 'info'])->default('announcement');
            $table->enum('target_audience', ['all_members', 'active_members', 'borrowers', 'specific_members']);
            $table->json('recipient_ids')->nullable(); // Array of member IDs for specific targeting
            $table->date('publish_date');
            $table->date('expiry_date')->nullable();
            $table->boolean('is_published')->default(false);
            $table->boolean('send_email')->default(false);
            $table->boolean('send_sms')->default(false);
            $table->boolean('send_push')->default(false);
            $table->integer('total_sent')->default(0);
            $table->integer('total_read')->default(0);
            $table->foreignId('created_by')->constrained('users');
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('publish_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('broadcasts');
    }
};
