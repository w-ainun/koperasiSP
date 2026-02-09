<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SupportTicketResponse extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'support_ticket_id',
        'user_id',
        'response',
        'is_internal_note',
        'attachment_path',
    ];

    protected $casts = [
        'is_internal_note' => 'boolean',
    ];

    /**
     * Get the ticket.
     */
    public function ticket(): BelongsTo
    {
        return $this->belongsTo(SupportTicket::class, 'support_ticket_id');
    }

    /**
     * Get the user.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
