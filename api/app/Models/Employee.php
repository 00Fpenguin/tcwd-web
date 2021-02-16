<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    const ADMIN = true;
    const REGULAR = false;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'middle_name',
        'employment_date',
        'is_validated',
        'is_active',
        'birth_date',
        'account_name',
        'contact_number',
        'civil_status',
        'gender',
        'spouse_name',
        'ownership_details',
        'is_admin',
        'occupation_id',
        'department_id',
    ];

    public function user()
    {
        return $this->morphOne(User::class, 'typeable');
    }
}
