<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Transaction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'member_id',
        'transaction_number',
        'transaction_category',
        'transaction_type',
        'amount',
        'reference_type',
        'reference_id',
        'description',
        'transaction_date',
        'processed_by',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'transaction_date' => 'date',
    ];

    /**
     * Get the member.
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    /**
     * Get the processor.
     */
    public function processor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'processed_by');
    }

    /**
     * Get the owning reference model (polymorphic).
     */
    public function reference(): MorphTo
    {
        return $this->morphTo();
    }
}
