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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('message');
            $table->enum('type', ['info', 'success', 'warning', 'error'])->default('info');
            $table->enum('category', ['account', 'savings', 'loan', 'payment', 'shu', 'announcement', 'system']);
            $table->string('reference_type', 50)->nullable();
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->json('action_url')->nullable(); // JSON: {url, label}
            $table->boolean('is_read')->default(false);
            $table->timestamp('read_at')->nullable();
            $table->boolean('sent_email')->default(false);
            $table->boolean('sent_sms')->default(false);
            $table->boolean('sent_push')->default(false);
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['user_id', 'is_read'], 'idx_notif_user_read');
            $table->index(['reference_type', 'reference_id'], 'idx_notif_ref_type_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
