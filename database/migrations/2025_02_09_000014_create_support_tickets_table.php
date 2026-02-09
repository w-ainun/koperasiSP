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
        Schema::create('support_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('ticket_number', 20)->unique();
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->enum('category', ['account', 'savings', 'loan', 'payment', 'technical', 'complaint', 'other']);
            $table->string('subject');
            $table->text('description');
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
            $table->enum('status', ['open', 'in_progress', 'waiting_member', 'resolved', 'closed'])->default('open');
            $table->foreignId('assigned_to')->nullable()->constrained('users');
            $table->timestamp('assigned_at')->nullable();
            $table->timestamp('resolved_at')->nullable();
            $table->timestamp('closed_at')->nullable();
            $table->text('resolution_notes')->nullable();
            $table->integer('satisfaction_rating')->nullable()->comment('1-5 stars');
            $table->text('satisfaction_feedback')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['member_id', 'status'], 'idx_ticket_member_status');
            $table->index('ticket_number', 'idx_ticket_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_tickets');
    }
};
