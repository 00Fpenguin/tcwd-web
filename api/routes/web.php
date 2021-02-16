<?php

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Luigel\Paymongo\Facades\Paymongo;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/checkout', function () {
    Log::info('CHECKOUT');
    Log::info(request()->all());
    if (request()->query('success') == 1) {
        return redirect()->away('app://tcwd/bill/success');
    }
    return redirect()->away('app://tcwd/bill/failed');
})->name('checkout');
