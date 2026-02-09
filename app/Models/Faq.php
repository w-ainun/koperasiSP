<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Faq extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'category',
        'question',
        'answer',
        'order',
        'is_published',
        'view_count',
        'helpful_count',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];
}
