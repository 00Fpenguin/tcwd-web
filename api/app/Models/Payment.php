<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'billing_id',
        'status',
        'type_code',
        'date_of_payment',
        'amount_of_payment',
        'payment_method_id',
    ];
}
