<?php

namespace App\Http\Controllers\API\Auth;

use App\Traits\Auth\VerifiesEmails;
use App\Http\Controllers\Controller;

class VerificationController extends Controller
{
  /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

  use VerifiesEmails;

  /**
   * Where to redirect users after verification.
   *
   * @var string
   */
  protected $redirectTo = '/';

  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    // $this->middleware('auth:api');
    $this->middleware('signed')->only('verify');
  }
}
