<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class LoggedUserController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth:api');
    $this->middleware('verified');
    $this->middleware('otp');
  }

  /**
   * Checkear autenticación.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function checkAuth()
  {
    return response()->json(null, 204);
  }

  /**
   * Obtener usuario actual.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function getCurrentUser(Request $request)
  {
    $user = $request->user();
    return new UserResource($user);
  }
}
