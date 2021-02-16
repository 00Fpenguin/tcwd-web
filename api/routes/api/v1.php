<?php

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Luigel\Paymongo\Facades\Paymongo;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/webhook', function (Request $request) {
    $data = Arr::get($request->all(), 'data.attributes');

    if ($data['type'] !== 'source.chargeable') {
        return response()->noContent();
    }

    $source = Arr::get($data, 'data');
    $sourceData = $source['attributes'];

    if ($sourceData['status'] === 'chargeable') {
        $payment = Paymongo::payment()->create([
            'amount' => $sourceData['amount'] / 100,
            'currency' => $sourceData['currency'],
            'description' => $sourceData['type'] . ' test from src ' . $source['id'],
            'source' => [
                'id' => $source['id'],
                'type' => $source['type'],
            ]
        ]);
    }

    return response()->noContent();
})->middleware('paymongo.signature');


// Public routes
// App\Http\Controllers\API\v1\Auth
Route::namespace('Auth')
    ->group(function () {
        // we can make our controller invokable
        Route::resource('register', 'RegisterController')->only(['store']);
        Route::resource('login', 'LoginController')->only(['store']);
    });

// Private routes
// This routes needs authentication token to be access by a consumer
Route::middleware('auth:api')
    ->group(function () {

        // App\Http\Controllers\API\v1\Auth
        Route::namespace('Auth')
            ->group(function () {
                Route::resource('logout', 'LogoutController')->only(['store']);
            });

        // App\Http\Controllers\API\v1\Employee
        Route::namespace('Employee')
            ->group(function () {
                Route::resource('employees', 'EmployeeController');
            });

        // App\Http\Controllers\API\v1\Customer
        Route::namespace('Customer')
            ->group(function () {
                Route::resource('customers', 'CustomerController');
                Route::resource('customers.payments', 'CustomerPaymentController');
            });

        Route::post('/payment', function (Request $request) {
            $user = auth()->user();
            Log::info([
                'type' => $request->type,
                'amount' => $request->amount,
                'currency' => 'PHP',
                'redirect' => [
                    'success' => route('checkout', ['success' => 1]),
                    'failed' => route('checkout', ['success' => 0])
                ]
            ]);
            $source = Paymongo::source()->create([
                'type' => $request->type,
                'amount' => $request->amount,
                'currency' => 'PHP',
                'redirect' => [
                    'success' => route('checkout', ['success' => 1]),
                    'failed' => route('checkout', ['success' => 0])
                ]
            ]);

            Log::info('src id ' . $source->id);

            return response()->json(['checkout_url' => $source->getRedirect()['checkout_url']]);
        });
    });
