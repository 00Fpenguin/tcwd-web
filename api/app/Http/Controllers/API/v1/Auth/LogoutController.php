<?php

namespace App\Http\Controllers\API\v1\Auth;

use App\Http\Controllers\API\BaseApiController as Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LogoutController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store()
    {
        auth()->user()->token()->revoke();

        return $this->successResponse(["message" => "Logout successfully"]);
    }
}
