<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CollateralDocument extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'collateral_id',
        'document_type',
        'file_name',
        'file_path',
        'file_mime',
        'file_size',
        'description',
    ];

    /**
     * Get the collateral that owns the document.
     */
    public function collateral(): BelongsTo
    {
        return $this->belongsTo(Collateral::class);
    }
}
