<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'employee_date',
        'is_validated',
        'is_active',
        'department_id',
    ];

    public function user()
    {
        return $this->morphOne();
    }
}
