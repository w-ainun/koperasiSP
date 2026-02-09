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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('member_number', 20)->unique();
            $table->string('nik', 16)->unique();
            $table->string('full_name');
            $table->enum('gender', ['male', 'female']);
            $table->string('place_of_birth');
            $table->date('date_of_birth');
            $table->text('address');
            $table->string('city', 100);
            $table->string('province', 100);
            $table->string('postal_code', 10);
            $table->string('occupation', 100)->nullable();
            $table->string('company_name', 100)->nullable();
            $table->decimal('monthly_income', 15, 2)->nullable();
            $table->string('emergency_contact_name', 100)->nullable();
            $table->string('emergency_contact_phone', 20)->nullable();
            $table->string('emergency_contact_relation', 50)->nullable();
            $table->date('registration_date');
            $table->date('approved_date')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->text('rejection_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
