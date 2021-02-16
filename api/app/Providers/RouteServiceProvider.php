<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    protected $apiNamespace ='App\Http\Controllers\API';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            // v1 api routes
            $this->initializeAPIRoutes("v1");

            // v2 api routes
            // $this->initializeAPIRoutes("v2");

            // web routes
            $this->initializeWebRoutes();
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
        });
    }

    /**
     * Setting up api routes by specifying its version
     *
     * @param $version
     * @return void
     */
    protected function initializeAPIRoutes($version)
    {
        Route::prefix('api')
            ->middleware(['accept_json', 'api', 'api_version:' . $version])
            ->namespace("{$this->apiNamespace}\\{$version}")
            ->prefix($version)
            ->group(base_path("routes/api/{$version}.php"));
    }

    /**
     * Setting up web routes
     *
     * @return void
     */
    protected function initializeWebRoutes()
    {
        Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
    }
}
