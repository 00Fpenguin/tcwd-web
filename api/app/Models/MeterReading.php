<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeterReading extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_meter_id',
        'employee_id',
        'date_of_reading',
        'reading_value',
    ];

    public function billing()
    {
        return $this->hasOne(Billing::class, 'meter_reading_id');
    }
}
