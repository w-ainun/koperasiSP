<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'value',
        'type',
        'group',
        'label',
        'description',
        'is_public',
    ];

    protected $casts = [
        'is_public' => 'boolean',
    ];

    /**
     * Get value with proper type casting.
     */
    public function getTypedValue()
    {
        return match ($this->type) {
            'integer' => (int) $this->value,
            'decimal' => (float) $this->value,
            'boolean' => filter_var($this->value, FILTER_VALIDATE_BOOLEAN),
            'json' => json_decode($this->value, true),
            'date' => $this->value ? \Carbon\Carbon::parse($this->value) : null,
            default => $this->value,
        };
    }

    /**
     * Get setting by key.
     */
    public static function get(string $key, $default = null)
    {
        $setting = static::where('key', $key)->first();
        return $setting ? $setting->getTypedValue() : $default;
    }

    /**
     * Set setting value.
     */
    public static function set(string $key, $value): bool
    {
        return static::where('key', $key)->update(['value' => $value]);
    }
}
