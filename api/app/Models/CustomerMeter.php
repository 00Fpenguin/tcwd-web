<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerMeter extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'meter_id',
        'date_from',
        'date_to',
    ];

    public function readings()
    {
        return $this->hasMany(MeterReading::class, 'customer_meter_id');
    }
}
