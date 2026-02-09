<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Notification extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'message',
        'type',
        'category',
        'reference_type',
        'reference_id',
        'action_url',
        'is_read',
        'read_at',
        'sent_email',
        'sent_sms',
        'sent_push',
    ];

    protected $casts = [
        'action_url' => 'array',
        'is_read' => 'boolean',
        'read_at' => 'datetime',
        'sent_email' => 'boolean',
        'sent_sms' => 'boolean',
        'sent_push' => 'boolean',
    ];

    /**
     * Get the user.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the owning reference model (polymorphic).
     */
    public function reference(): MorphTo
    {
        return $this->morphTo();
    }
}
