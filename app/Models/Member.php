<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Member extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'member_number',
        'nik',
        'full_name',
        'gender',
        'place_of_birth',
        'date_of_birth',
        'address',
        'city',
        'province',
        'postal_code',
        'occupation',
        'company_name',
        'monthly_income',
        'emergency_contact_name',
        'emergency_contact_phone',
        'emergency_contact_relation',
        'registration_date',
        'approved_date',
        'approved_by',
        'rejection_reason',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'registration_date' => 'date',
        'approved_date' => 'date',
        'monthly_income' => 'decimal:2',
    ];

    /**
     * Get the user that owns the member profile.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the admin who approved this member.
     */
    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    /**
     * Get all documents for the member.
     */
    public function documents(): HasMany
    {
        return $this->hasMany(MemberDocument::class);
    }

    /**
     * Get all savings accounts for the member.
     */
    public function savingsAccounts(): HasMany
    {
        return $this->hasMany(SavingsAccount::class);
    }

    /**
     * Get all loans for the member.
     */
    public function loans(): HasMany
    {
        return $this->hasMany(Loan::class);
    }

    /**
     * Get all transactions for the member.
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    /**
     * Get all support tickets for the member.
     */
    public function supportTickets(): HasMany
    {
        return $this->hasMany(SupportTicket::class);
    }

    /**
     * Get all SHU distributions for the member.
     */
    public function shuDistributions(): HasMany
    {
        return $this->hasMany(ShuDistribution::class);
    }

    /**
     * Get all collaterals for the member.
     */
    public function collaterals(): HasMany
    {
        return $this->hasMany(Collateral::class);
    }
}
