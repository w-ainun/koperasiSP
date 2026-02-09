<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SavingsAccount extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'member_id',
        'account_number',
        'savings_type',
        'balance',
        'interest_rate',
        'opened_date',
        'closed_date',
        'status',
    ];

    protected $casts = [
        'balance' => 'decimal:2',
        'interest_rate' => 'decimal:2',
        'opened_date' => 'date',
        'closed_date' => 'date',
    ];

    /**
     * Get the member that owns the savings account.
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    /**
     * Get all transactions for the savings account.
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(SavingsTransaction::class);
    }

    /**
     * Get deposits only.
     */
    public function deposits(): HasMany
    {
        return $this->transactions()->where('transaction_type', 'deposit');
    }

    /**
     * Get withdrawals only.
     */
    public function withdrawals(): HasMany
    {
        return $this->transactions()->where('transaction_type', 'withdrawal');
    }
}
