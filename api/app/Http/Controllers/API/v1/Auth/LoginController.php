<?php

namespace App\Http\Controllers\API\v1\Auth;

use App\Http\Controllers\API\BaseApiController as Controller;
use App\Http\Requests\v1\Auth\LoginRequest;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Response;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Login registered user
     *
     * @param LoginRequest $request
     * @return Response
     */
    public function store(LoginRequest $request)
    {
        if ($this->attemptLogin($request)) {
            $authenticatedUser = auth()->user();

            return $this->successResponse([
                "user" => $authenticatedUser,
                "token" => $authenticatedUser->createToken('authToken')->accessToken
            ]);
        }

        return $this->errorResponse('Invalid Credentials.', Response::HTTP_UNAUTHORIZED);
    }

    public function username()
    {
        return 'username';
    }
}
