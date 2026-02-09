<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SavingsTransaction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'savings_account_id',
        'transaction_number',
        'transaction_type',
        'amount',
        'balance_before',
        'balance_after',
        'payment_method',
        'payment_reference',
        'payment_proof_path',
        'description',
        'status',
        'processed_by',
        'processed_at',
        'rejection_reason',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'balance_before' => 'decimal:2',
        'balance_after' => 'decimal:2',
        'processed_at' => 'datetime',
    ];

    /**
     * Get the savings account that owns the transaction.
     */
    public function savingsAccount(): BelongsTo
    {
        return $this->belongsTo(SavingsAccount::class);
    }

    /**
     * Get the user who processed this transaction.
     */
    public function processor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'processed_by');
    }
}
