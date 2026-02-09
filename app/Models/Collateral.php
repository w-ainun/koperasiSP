<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Collateral extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'loan_id',
        'member_id',
        'collateral_number',
        'category',
        'item_name',
        'description',
        'bpkb_number',
        'chassis_number',
        'engine_number',
        'vehicle_brand',
        'vehicle_type',
        'vehicle_year',
        'certificate_number',
        'certificate_type',
        'land_area',
        'building_area',
        'property_address',
        'gold_weight',
        'gold_purity',
        'gold_certificate_number',
        'owner_name_on_document',
        'document_number',
        'document_expiry_date',
        'market_value',
        'appraisal_value',
        'loan_to_value_ratio',
        'appraisal_notes',
        'appraised_by',
        'appraisal_date',
        'condition',
        'status',
        'handover_date',
        'release_date',
        'received_by',
        'released_by',
        'storage_location',
        'release_notes',
    ];

    protected $casts = [
        'land_area' => 'decimal:2',
        'building_area' => 'decimal:2',
        'gold_weight' => 'decimal:2',
        'market_value' => 'decimal:2',
        'appraisal_value' => 'decimal:2',
        'loan_to_value_ratio' => 'decimal:2',
        'document_expiry_date' => 'date',
        'appraisal_date' => 'date',
        'handover_date' => 'date',
        'release_date' => 'date',
    ];

    /**
     * Get the loan associated with the collateral.
     */
    public function loan(): BelongsTo
    {
        return $this->belongsTo(Loan::class);
    }

    /**
     * Get the member that owns the collateral.
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    /**
     * Get the appraiser.
     */
    public function appraiser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'appraised_by');
    }

    /**
     * Get the receiver.
     */
    public function receiver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'received_by');
    }

    /**
     * Get the releaser.
     */
    public function releaser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'released_by');
    }

    /**
     * Get all documents for the collateral.
     */
    public function documents(): HasMany
    {
        return $this->hasMany(CollateralDocument::class);
    }
}
