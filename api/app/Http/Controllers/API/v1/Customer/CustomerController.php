<?php

namespace App\Http\Controllers\API\v1\Customer;

use App\Http\Controllers\API\BaseApiController as Controller;
use App\Models\Customer;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->query('type') === '1') {
            $customers = Customer::where('is_applicant', 1)->paginate(10);
        } else if (request()->query('type') === '0') {
            $customers = Customer::where('is_applicant', 0)->paginate(10);
        } else {
            $customers = User::with('typeable')->whereHasMorph(
                'typeable',
                [Customer::class, Employee::class],
            )->paginate(10);
        }

        return response()->json($customers);
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
        $customer = Customer::findOrFail($id);

        return response()->json(['data' => $customer]);
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
