<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SupportTicket extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'ticket_number',
        'member_id',
        'category',
        'subject',
        'description',
        'priority',
        'status',
        'assigned_to',
        'assigned_at',
        'resolved_at',
        'closed_at',
        'resolution_notes',
        'satisfaction_rating',
        'satisfaction_feedback',
    ];

    protected $casts = [
        'assigned_at' => 'datetime',
        'resolved_at' => 'datetime',
        'closed_at' => 'datetime',
    ];

    /**
     * Get the member.
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    /**
     * Get the assigned user.
     */
    public function assignedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    /**
     * Get all responses.
     */
    public function responses(): HasMany
    {
        return $this->hasMany(SupportTicketResponse::class);
    }
}
