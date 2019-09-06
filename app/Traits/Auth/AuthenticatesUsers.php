<?php

namespace App\Traits\Auth;

use Illuminate\Foundation\Auth\AuthenticatesUsers as OriginalAuthenticatesUsers;
use Illuminate\Http\Request;

trait AuthenticatesUsers
{
  use OriginalAuthenticatesUsers;

  /* Sobre escribir logica original del trait */

  /**
   * Validate the user login request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return void
   */
  protected function validateLogin(Request $request)
  {
    $this->validate($request, [
      $this->username() => 'required|string',
      'password' => 'required|string'
    ]);
  }

  /**
   * Get the login username to be used by the controller.
   *
   * @return string
   */
  public function username()
  {
    return 'email';
  }
}
