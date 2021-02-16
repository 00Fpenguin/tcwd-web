<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'middle_name',
        'account_number',
        'account_name',
        'user_count',
        'type_of_water_service',
        'block_number',
        'barangay',
        'city',
        'route',
        'nearest_neighbor',
        'is_active',
        'birth_date',
        'contact_number',
        'civil_status',
        'gender',
        'spouse_name',
        'ownership_details',
    ];

    public function user()
    {
        return $this->morphOne(User::class, 'typeable');
    }

    public function meters()
    {
        return $this->belongsToMany(Meter::class, 'customer_meters');
    }
}
