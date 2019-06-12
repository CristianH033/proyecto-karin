<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Traits\Auth\ResetsPasswords;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:api');
    }

    public function checkValidToken(Request $request)
    {
        $validatedData = $request->validate([
            'token' => 'required',
            'user' => 'required'
        ]);

        $user = User::findOrFail($request->user);

        $reset = DB::table("password_resets")->where('email', $user->email)->first();
    
        // Validar si el token es válido para el correo proporcionado
        if(!Hash::check($request->token, $reset->token)){
            return abort(404);
        }

        return $user;
    }
}
