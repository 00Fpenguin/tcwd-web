<?php

namespace App\Http\Controllers\API\v1\Employee;

use App\Http\Controllers\API\BaseApiController as Controller;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customer = Customer::create([
            'account_number' => "00001",
            'user_count' => 5,
            'type_of_water_service' => 1,
            'block_number' => 5002,
            'barangay' => 'Dologon',
            'city' => 'Maramag',
            'route' => 'Purok 6',
            'nearest_neighbor' => 'Isyot',
            'is_active' => User::ACTIVE,
            'birth_date' => "1991-11-30",
            'account_name' => "Anjo Tadena",
            'contact_number' => '000000000001',
            'civil_status' => User::SINGLE,
            'gender' => User::MALE,
            'spouse_name' => null,
            'ownership_details' => 1,
        ]);

        // $customer->user()->create([
        //     'first_na'
        // ])

        return $customer;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
