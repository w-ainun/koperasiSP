<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShuDistribution extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'shu_configuration_id',
        'member_id',
        'fiscal_year',
        'average_principal_savings',
        'average_mandatory_savings',
        'total_capital_contribution',
        'total_interest_paid',
        'total_transaction_volume',
        'months_active',
        'has_arrears',
        'capital_share_amount',
        'transaction_share_amount',
        'total_shu_amount',
        'tax_percentage',
        'tax_amount',
        'net_shu_amount',
        'payment_status',
        'payment_date',
        'payment_method',
        'payment_reference',
        'processed_by',
        'notes',
    ];

    protected $casts = [
        'average_principal_savings' => 'decimal:2',
        'average_mandatory_savings' => 'decimal:2',
        'total_capital_contribution' => 'decimal:2',
        'total_interest_paid' => 'decimal:2',
        'total_transaction_volume' => 'decimal:2',
        'has_arrears' => 'boolean',
        'capital_share_amount' => 'decimal:2',
        'transaction_share_amount' => 'decimal:2',
        'total_shu_amount' => 'decimal:2',
        'tax_percentage' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'net_shu_amount' => 'decimal:2',
        'payment_date' => 'date',
    ];

    /**
     * Get the configuration for this distribution.
     */
    public function configuration(): BelongsTo
    {
        return $this->belongsTo(ShuConfiguration::class, 'shu_configuration_id');
    }

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
}
