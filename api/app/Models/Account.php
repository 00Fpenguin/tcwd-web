<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    const APPLICANT = 1;
    const EMPLOYEE = 2;
    const WATER = 3;

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
        'is_applicant', // 1 or 0
    ];
}
