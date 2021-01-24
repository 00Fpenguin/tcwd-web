<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{

    protected $fillable = [
        'account_number',
        'user_count',
        'type_of_water_service',
        'block_number',
        'barangay',
        'city',
        'route',
        'nearest_neighbor',
        'is_active',
        'birth_date',
        'account_name',
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
}
