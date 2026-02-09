<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Loan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'member_id',
        'loan_number',
        'loan_category',
        'loan_purpose',
        'principal_amount',
        'interest_rate',
        'interest_type',
        'tenor_months',
        'monthly_installment',
        'admin_fee',
        'insurance_fee',
        'total_amount',
        'disbursed_amount',
        'application_date',
        'approved_date',
        'disbursed_date',
        'disbursement_method',
        'disbursement_account',
        'outstanding_balance',
        'paid_installments',
        'debt_to_income_ratio',
        'credit_score',
        'status',
        'rejection_reason',
        'reviewed_by',
        'reviewed_at',
        'approved_by',
        'disbursed_by',
    ];

    protected $casts = [
        'principal_amount' => 'decimal:2',
        'interest_rate' => 'decimal:2',
        'monthly_installment' => 'decimal:2',
        'admin_fee' => 'decimal:2',
        'insurance_fee' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'disbursed_amount' => 'decimal:2',
        'outstanding_balance' => 'decimal:2',
        'debt_to_income_ratio' => 'decimal:2',
        'application_date' => 'date',
        'approved_date' => 'date',
        'disbursed_date' => 'date',
        'reviewed_at' => 'datetime',
    ];

    /**
     * Get the member that owns the loan.
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    /**
     * Get the reviewer of the loan.
     */
    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }

    /**
     * Get the approver of the loan.
     */
    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    /**
     * Get the disburser of the loan.
     */
    public function disburser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'disbursed_by');
    }

    /**
     * Get all installments for the loan.
     */
    public function installments(): HasMany
    {
        return $this->hasMany(LoanInstallment::class);
    }

    /**
     * Get all payments for the loan.
     */
    public function payments(): HasMany
    {
        return $this->hasMany(LoanPayment::class);
    }

    /**
     * Get all collaterals for the loan.
     */
    public function collaterals(): HasMany
    {
        return $this->hasMany(Collateral::class);
    }

    /**
     * Get overdue installments.
     */
    public function overdueInstallments(): HasMany
    {
        return $this->installments()->where('status', 'overdue');
    }
}
