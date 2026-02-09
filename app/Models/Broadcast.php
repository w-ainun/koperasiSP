<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Broadcast extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'message',
        'type',
        'target_audience',
        'recipient_ids',
        'publish_date',
        'expiry_date',
        'is_published',
        'send_email',
        'send_sms',
        'send_push',
        'total_sent',
        'total_read',
        'created_by',
    ];

    protected $casts = [
        'recipient_ids' => 'array',
        'publish_date' => 'date',
        'expiry_date' => 'date',
        'is_published' => 'boolean',
        'send_email' => 'boolean',
        'send_sms' => 'boolean',
        'send_push' => 'boolean',
    ];

    /**
     * Get the creator.
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
