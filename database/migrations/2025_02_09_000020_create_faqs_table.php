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
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->enum('category', ['account', 'savings', 'loan', 'payment', 'shu', 'general']);
            $table->string('question');
            $table->text('answer');
            $table->integer('order')->default(0);
            $table->boolean('is_published')->default(true);
            $table->integer('view_count')->default(0);
            $table->integer('helpful_count')->default(0);
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['category', 'is_published', 'order'], 'idx_faq_cat_published_order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faqs');
    }
};
