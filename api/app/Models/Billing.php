<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use HasFactory;

    protected $fillable = [
        'status_code',
        'meter_reading_id',
        'date_period_from',
        'date_period_to',
        'date_payment_due',
        'amount_due',
        'vat',
    ];

    public function payment()
    {
        return $this->hasOne(Payment::class, 'billing_id');
    }
}
