<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ShuConfiguration extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'fiscal_year',
        'net_profit',
        'reserve_fund_percentage',
        'member_capital_percentage',
        'member_transaction_percentage',
        'management_percentage',
        'employee_percentage',
        'education_percentage',
        'social_percentage',
        'reserve_fund_amount',
        'member_capital_amount',
        'member_transaction_amount',
        'management_amount',
        'employee_amount',
        'education_amount',
        'social_amount',
        'status',
        'calculation_date',
        'approval_date',
        'distribution_date',
        'calculated_by',
        'approved_by',
    ];

    protected $casts = [
        'net_profit' => 'decimal:2',
        'reserve_fund_percentage' => 'decimal:2',
        'member_capital_percentage' => 'decimal:2',
        'member_transaction_percentage' => 'decimal:2',
        'management_percentage' => 'decimal:2',
        'employee_percentage' => 'decimal:2',
        'education_percentage' => 'decimal:2',
        'social_percentage' => 'decimal:2',
        'reserve_fund_amount' => 'decimal:2',
        'member_capital_amount' => 'decimal:2',
        'member_transaction_amount' => 'decimal:2',
        'management_amount' => 'decimal:2',
        'employee_amount' => 'decimal:2',
        'education_amount' => 'decimal:2',
        'social_amount' => 'decimal:2',
        'calculation_date' => 'date',
        'approval_date' => 'date',
        'distribution_date' => 'date',
    ];

    /**
     * Get the calculator.
     */
    public function calculator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'calculated_by');
    }

    /**
     * Get the approver.
     */
    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    /**
     * Get all distributions for this configuration.
     */
    public function distributions(): HasMany
    {
        return $this->hasMany(ShuDistribution::class);
    }
}
