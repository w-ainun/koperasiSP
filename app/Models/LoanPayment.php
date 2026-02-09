<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LoanPayment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'loan_id',
        'loan_installment_id',
        'payment_number',
        'payment_amount',
        'principal_paid',
        'interest_paid',
        'late_fee_paid',
        'payment_method',
        'payment_reference',
        'payment_proof_path',
        'payment_date',
        'notes',
        'status',
        'processed_by',
        'processed_at',
    ];

    protected $casts = [
        'payment_amount' => 'decimal:2',
        'principal_paid' => 'decimal:2',
        'interest_paid' => 'decimal:2',
        'late_fee_paid' => 'decimal:2',
        'payment_date' => 'date',
        'processed_at' => 'datetime',
    ];

    /**
     * Get the loan that owns the payment.
     */
    public function loan(): BelongsTo
    {
        return $this->belongsTo(Loan::class);
    }

    /**
     * Get the installment that this payment is for.
     */
    public function installment(): BelongsTo
    {
        return $this->belongsTo(LoanInstallment::class, 'loan_installment_id');
    }

    /**
     * Get the user who processed this payment.
     */
    public function processor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'processed_by');
    }
}
