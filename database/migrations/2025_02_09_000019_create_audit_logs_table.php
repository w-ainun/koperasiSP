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
        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->string('event'); // e.g., 'created', 'updated', 'deleted', 'login', 'logout'
            $table->string('auditable_type', 100); // Model class name
            $table->unsignedBigInteger('auditable_id')->nullable(); // Model ID
            $table->text('old_values')->nullable(); // JSON of old values
            $table->text('new_values')->nullable(); // JSON of new values
            $table->string('ip_address', 45)->nullable();
            $table->string('user_agent', 255)->nullable();
            $table->text('url')->nullable();
            $table->timestamps();
            
            $table->index(['auditable_type', 'auditable_id'], 'idx_audit_auditable');
            $table->index(['user_id', 'event'], 'idx_audit_user_event');
            $table->index('created_at', 'idx_audit_created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('audit_logs');
    }
};
