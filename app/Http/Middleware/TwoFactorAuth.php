<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Lang;

class TwoFactorAuth
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
    if (!$this->verifiedUser()) {
      return response()->json(
        [
          "message" => Lang::get('auth.otp.required'),
          "forbiddenCode" => 2
        ],
        403
      );
    }

    return $next($request);
  }

  private function verifiedUser()
  {
    if (auth()->user()) {
      // return !auth()->user()->otp_verified;
      return auth()
        ->user()
        ->OTPVerified() == true;
    }
    return false;
  }
}
