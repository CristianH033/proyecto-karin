<?php

namespace App\Http\Controllers\API\Auth;

use DB;
use Cookie;
use App\User;
use App\Traits\Auth\OTP;
use Illuminate\Http\Request;
use App\Traits\Auth\OauthProxy;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Lang;
use App\Traits\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

  use AuthenticatesUsers, OauthProxy, OTP;

  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth:api')->only(['logout']);
    $this->middleware('guest:api')->except(['logout', 'refreshAccessToken']);
  }

  /**
   * Handle a login request to the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
   *
   * @throws \Illuminate\Validation\ValidationException
   */
  public function login(Request $request)
  {
    // Convertir el campo correo en minusculas
    if ($request->has('email')) {
      $request->merge(array('email' => strtolower($request->email)));
    }

    $this->validateLogin($request);

    // If the class is using the ThrottlesLogins trait, we can automatically throttle
    // the login attempts for this application. We'll key this by the username and
    // the IP address of the client making these requests into this application.
    if ($this->hasTooManyLoginAttempts($request)) {
      $this->fireLockoutEvent($request);
      return $this->sendLockoutResponse($request);
    }

    if ($this->attemptLogin($request)) {
      return $this->sendLoginResponse($request);
    }

    // If the login attempt was unsuccessful we will increment the number of attempts
    // to login and redirect the user back to the login form. Of course, when this
    // user surpasses their maximum number of attempts they will get locked out.
    $this->incrementLoginAttempts($request);

    return $this->sendFailedLoginResponse($request);
  }

  /**
   * Send the response after the user was authenticated.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  protected function sendLoginResponse(Request $request)
  {
    // Limpiar contador de intentos de incio de sesión
    $this->clearLoginAttempts($request);
    // Enviar código OTP
    $user = User::where('email', $request->email)->first();
    if (!$user->ongoingOTP()) {
      $this->sendOTP($user);
    } else {
      $user->SetOTPVerified(false);
    }
    // Hacer petición al proxy y devolver los tokens
    return $this->proxy("password", [
      'username' => $request->email,
      'password' => $request->password
    ]);
  }

  /**
   * Renovar token de acceso y devolverlo.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  protected function refreshAccessToken(Request $request)
  {
    if ($request->hasCookie('refresh-token')) {
      return $this->proxy("refresh_token", [
        'refresh_token' => $request->cookie('refresh-token')
      ]);
    }

    return response()->json(
      ["message" => Lang::get("Invalid refresh token")],
      401
    );
  }

  /**
   * Log the user out of the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function logout(Request $request)
  {
    // Establecer OTP verificado en falso
    $this->revokeOTP();
    // Obtener el Access Token
    $accessToken = $request->user()->token();
    // Revocar refresh token correspondiente
    DB::table('oauth_refresh_tokens')
      ->where('access_token_id', $accessToken->id)
      ->update([
        'revoked' => true
      ]);
    // Revocar access token
    $accessToken->revoke();
    // Olvidar cookie de refresh token
    $cookie = Cookie::forget('refresh-token');
    return response()
      ->json(null, 204)
      ->withCookie($cookie);
  }
}
