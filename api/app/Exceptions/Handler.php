<?php

namespace App\Exceptions;

use App\Traits\JsonResponser;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    use JsonResponser;
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (ValidationException $e, $request) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_UNPROCESSABLE_ENTITY, $e->errors());
        });

        $this->renderable(function (AuthenticationException $e, $request) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_UNAUTHORIZED);
        });
    }

    public function render($request, Throwable $e)
    {
        return parent::render($request, $e); // TODO: Change the autogenerated stub
    }
}
