<?php

namespace App\Http\Controllers\API\Auth;

use App\User;
use App\Persona;
use Illuminate\Http\Request;
use App\Traits\Auth\RegistersUsers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
  /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

  use RegistersUsers;

  /**
   * Where to redirect users after registration.
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
    $this->middleware('guest:api');
  }

  /**
   * Handle a registration request for the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function register(Request $request)
  {
    // Convertir el campo correo en minusculas
    if ($request->has('email')) {
      $request->merge(array('email' => strtolower($request->email)));
    }

    $this->validator($request->all())->validate();

    event(new Registered(($user = $this->create($request->all()))));

    $this->registered($request, $user);

    return response()->json([
      "message" => Lang::get("An email has been sent to :mail.", [
        'mail' => $request->email
      ])
    ]);

    // return $this->proxy("password", [
    //   'username' => $request->email,
    //   'password' => $request->password
    // ]);
  }

  /**
   * Get a validator for an incoming registration request.
   *
   * @param  array  $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
  protected function validator(array $data)
  {
    // Persona::where('dni', $data->dni)->firstOrFail
    return Validator::make($data, [
      'dni' => [
        'required',
        'numeric',
        'exists:personas,dni',
        function ($attribute, $value, $fail) {
          $persona = Persona::where('dni', $value)->first();
          if ($persona) {
            if ($persona->user()->exists()) {
              $fail(Lang::get("This person already has a user created."));
            }
          }
        }
      ],
      'email' => 'required|string|email|max:255|unique:users',
      'password' => 'required|string|min:6|confirmed'
    ]);
  }

  /**
   * Create a new user instance after a valid registration.
   *
   * @param  array  $data
   * @return \App\User
   */
  protected function create(array $data)
  {
    return User::create([
      'email' => $data['email'],
      'password' => Hash::make($data['password']),
      'persona_id' => Persona::where('dni', $data['dni'])->first()->id
    ]);
  }

  /**
   * The user has been registered.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  mixed  $user
   * @return mixed
   */
  protected function registered(Request $request, $user)
  {
  }
}
