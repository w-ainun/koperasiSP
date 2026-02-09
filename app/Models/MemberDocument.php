<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MemberDocument extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'member_id',
        'document_type',
        'file_name',
        'file_path',
        'file_mime',
        'file_size',
        'verification_status',
        'verification_notes',
        'verified_by',
        'verified_at',
    ];

    protected $casts = [
        'verified_at' => 'datetime',
    ];

    /**
     * Get the member that owns the document.
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    /**
     * Get the user who verified this document.
     */
    public function verifier(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by');
    }
}
