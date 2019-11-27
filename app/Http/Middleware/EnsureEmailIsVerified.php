<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Lang;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class EnsureEmailIsVerified
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @param  string|null  $redirectToRoute
   * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
   */
  public function handle($request, Closure $next, $redirectToRoute = null)
  {
    if (
      !$request->user() ||
      ($request->user() instanceof MustVerifyEmail &&
        !$request->user()->hasVerifiedEmail())
    ) {
      return response()->json(
        [
          "message" => Lang::get('auth.email'),
          "forbiddenCode" => 1
        ],
        403
      );
    }

    return $next($request);
  }
}
