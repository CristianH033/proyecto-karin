<?php

namespace App\Http\Controllers\API\Auth;

use App\Traits\Auth\OTP;
use App\Http\Controllers\Controller;

class OTPController extends Controller
{
  use OTP;

  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth:api');
    $this->middleware('verified');
  }
}
