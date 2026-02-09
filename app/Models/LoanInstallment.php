<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LoanInstallment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'loan_id',
        'installment_number',
        'due_date',
        'principal_amount',
        'interest_amount',
        'total_amount',
        'outstanding_balance',
        'paid_amount',
        'late_fee',
        'days_overdue',
        'paid_date',
        'status',
    ];

    protected $casts = [
        'due_date' => 'date',
        'paid_date' => 'date',
        'principal_amount' => 'decimal:2',
        'interest_amount' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'outstanding_balance' => 'decimal:2',
        'paid_amount' => 'decimal:2',
        'late_fee' => 'decimal:2',
    ];

    /**
     * Get the loan that owns the installment.
     */
    public function loan(): BelongsTo
    {
        return $this->belongsTo(Loan::class);
    }

    /**
     * Get all payments for this installment.
     */
    public function payments(): HasMany
    {
        return $this->hasMany(LoanPayment::class);
    }
}
