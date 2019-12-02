<?php

namespace App\Traits\Auth;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Verified;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\VerifiesEmails as OriginalVerifiesEmails;

trait VerifiesEmails
{
  use OriginalVerifiesEmails;

  /* Sobre escribir logica original del trait */

  /**
   * Show the email verification notice.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function show(Request $request)
  {
    return $request->user()->hasVerifiedEmail()
      ? redirect($this->redirectPath())
      : view('auth.verify');
  }

  /**
   * Mark the authenticated user's email address as verified.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   * @throws \Illuminate\Auth\Access\AuthorizationException
   */
  public function verify(Request $request)
  {
    $request->validate([
      'id' => 'required|exists:users,id',
      'signature' => 'required',
      'expires' => 'required',
      'hash' => 'required'
    ]);

    $user = User::findOrFail($request->id);

    if (
      !hash_equals(
        (string) $request->hash,
        sha1($user->getEmailForVerification())
      )
    ) {
      throw new AuthorizationException(__("The URL is not valid."));
    }

    if ($user->hasVerifiedEmail()) {
      return response()->json([
        "message" => __("The mail has already been verified.")
      ]);
    }

    if ($user->markEmailAsVerified()) {
      event(new Verified($user));
    }

    return response()->json(["message" => __("Mail verified correctly.")]);
  }

  /**
   * Resend the email verification notification.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function resend(Request $request)
  {
    // Convertir el campo correo en minusculas
    if ($request->has('email')) {
      $request->merge(array('email' => strtolower($request->email)));
    }

    $request->validate([
      'email' => 'required|exists:users,email'
    ]);

    $user = User::where('email', $request->email)->first();

    if ($user->hasVerifiedEmail()) {
      return response()->json([
        "message" => __("The mail has already been verified.")
      ]);
    }

    $user->sendEmailVerificationNotification();

    return response()->json([
      "message" => __("An email has been sent to :mail.", [
        'mail' => $request->email
      ])
    ]);
  }

  public function redirectTo()
  {
    return redirect()->route('home');
  }
}
