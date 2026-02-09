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
        Schema::create('savings_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained()->onDelete('cascade');
            $table->string('account_number', 20)->unique();
            $table->enum('savings_type', ['pokok', 'wajib', 'sukarela']); // pokok=principal, wajib=mandatory, sukarela=voluntary
            $table->decimal('balance', 15, 2)->default(0);
            $table->decimal('interest_rate', 5, 2)->default(0); // percentage
            $table->date('opened_date');
            $table->date('closed_date')->nullable();
            $table->enum('status', ['active', 'frozen', 'closed'])->default('active');
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['member_id', 'savings_type'], 'idx_sa_member_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('savings_accounts');
    }
};
