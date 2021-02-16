<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class APIVersion
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param Closure $next
     * @param $guard
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $guard)
    {
        config(['api.version' => $guard]);

        return $next($request);
    }
}
