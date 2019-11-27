<?php

namespace App\Traits\Auth;

use App\Http\Requests\OTPRequest;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Validator;

trait OTP
{
  /**
   * @Author: Cristian David Home
   * @Date: 2019-11-26 17:33:01
   * @Desc: Enviar código OTP por correo
   * @param App\Http\Requests\ResentOTPRequest $request
   * @return \Illuminate\Http\Response
   */
  public function sendOTP($paramUser = null)
  {
    $user = $paramUser ?: $this->user();

    $user->sendOTP();

    return response()->json([
      "message" => Lang::get('auth.otp.sended')
    ]);
  }

  /**
   * @Author: Cristian David Home
   * @Date: 2019-11-26 17:33:01
   * @Desc: Verificar si código OTP es correcto
   * @param App\Http\Requests\OTPRequest $request
   * @return \Illuminate\Http\Response
   */
  public function verifyOTP(OTPRequest $request)
  {
    // Validar petición
    Validator::make($request->all(), [
      'OTP' => [
        'bail',
        'required',
        'digits_between:6,6',
        function ($attribute, $value, $fail) {
          if (!$this->validateOTP($value)) {
            $fail(Lang::get('auth.otp.wrong'));
          }
        }
      ]
    ])->validate();

    // Marcar como verificado
    $this->user()->SetOTPVerified(true);

    // Enviar respuesta
    return response()->json([
      "message" => Lang::get('auth.otp.accepted')
    ]);
  }

  /**
   * @Author: Cristian David Home
   * @Date: 2019-11-26 17:33:01
   * @Desc: Validar si el OTP provisto es correcto
   * @param Strig $OTP
   * @return Boolean
   */
  public function validateOTP($OTP)
  {
    return $OTP == $this->user()->OTP();
  }

  /**
   * @Author: Cristian David Home
   * @Date: 2019-11-26 17:35:20
   * @Desc: Revocar el OTP del usuario actual
   * @return void
   */
  public function revokeOTP()
  {
    $this->user()->SetOTPVerified(false);
  }

  /**
   * @Author: Cristian David Home
   * @Date: 2019-11-26 17:35:20
   * @Desc: Obtener el usuario actual
   * @return \App\User
   */
  protected function user()
  {
    return auth()->user();
  }
}
