<?php

namespace App\Traits\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Foundation\Auth\ResetsPasswords as OriginalResetsPasswordsTrait;

trait ResetsPasswords
{
  use OriginalResetsPasswordsTrait;

  /* Sobre escribir logica original del trait */

  /**
   * Get the response for a successful password reset.
   *
   * @param  string  $response
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
   */
  protected function sendResetResponse($response)
  {
    if (request()->wantsJson()) {
      return response()->json(
        [
          'message' => trans($response)
        ],
        200
      );
    }

    return redirect($this->redirectPath())->with('status', trans($response));
  }

  /**
   * Get the response for a failed password reset.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  string  $response
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
   */
  protected function sendResetFailedResponse(Request $request, $response)
  {
    if ($request->wantsJson()) {
      return response()->json(
        [
          'message' => trans($response)
        ],
        404
      );
    }
    return redirect()
      ->back()
      ->withInput($request->only('email'))
      ->withErrors(['email' => trans($response)]);
  }
}
