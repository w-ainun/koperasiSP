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
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['member', 'admin', 'teller', 'credit_analyst', 'collector', 'management'])->default('member')->after('email');
            $table->enum('status', ['pending', 'active', 'suspended', 'inactive'])->default('pending')->after('role');
            $table->string('phone', 20)->nullable()->after('email');
            $table->timestamp('email_verified_at')->nullable()->change();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'status', 'phone']);
            $table->dropSoftDeletes();
        });
    }
};
