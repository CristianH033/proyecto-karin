<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * @Author: Cristian Home
 * @Date: 2019-06-08 19:49:27
 * @Desc: Rutas API de la aplicación.
 */

/* Prefijo de nombre para todas las rutas API (api.*) */
Route::name('api.')->group(function () {
  /**
   * Controladores que se encuentran dentro de la carpeta API\Auh
   */
  Route::namespace('API\Auth')->group(function () {
    // Authentication
    Route::post('login', 'LoginController@login')->name('login');
    Route::post('refresh-token', 'LoginController@refreshAccessToken')->name(
      'refresh.token'
    );
    Route::post('register', 'RegisterController@register')->name('register');
    Route::post('logout', 'LoginController@logout')->name('logout');

    // Email Verification
    Route::get('verification/verify', 'VerificationController@verify')->name(
      'verification.verify'
    );
    Route::post('verification/resend', 'VerificationController@resend')->name(
      'verification.resend'
    );

    // One Time Password (OTP)
    Route::post('otp/sendotp', 'OTPController@sendOTP')->name('otp.send');
    Route::post('otp/verify', 'OTPController@verifyOTP')->name('otp.verify');

    // Reset Password
    Route::post(
      'password/email',
      'ForgotPasswordController@sendResetLinkEmail'
    )->name('password.email');
    Route::post('password/reset', 'ResetPasswordController@reset')->name(
      'password.update'
    );

    // Check Authentication
    Route::get('auth-check', 'LoggedUserController@checkAuth')->name(
      'auth.check'
    );
    Route::get('current-user', 'LoggedUserController@getCurrentUser')->name(
      'auth.user'
    );
  });
  /**
   * Creación dínamica de rutas para todos los recursos (modelos-controladores)
   * Cada recurso creara una ruta para cada acción basica de CRUD
   * y su correspondiente verbo HTTP (POST, GET, PUT, DELETE)
   */
  Route::apiResources([
    'tags' => 'TagController',
    'users' => 'UserController',
    'sedes' => 'SedeController',
    'areas' => 'AreaController',
    'paises' => 'PaisController',
    'cargos' => 'CargoController',
    'estados' => 'EstadoController',
    'modelos' => 'ModeloController',
    'generos' => 'GeneroController',
    'otrosis' => 'OtrosiController',
    'eventos' => 'EventoController',
    'ciudades' => 'CiudadController',
    'personas' => 'PersonaController',
    'terceros' => 'TerceroController',
    'contratos' => 'ContratoController',
    'garantias' => 'GarantiaController',
    'productos' => 'ProductoController',
    'servicios' => 'ServicioController',
    'traslados' => 'TrasladoController',
    'operadores' => 'OperadorController',
    'proovedores' => 'TerceroController',
    'componentes' => 'ComponenteController',
    'ubicaciones' => 'UbicacionController',
    'fabricantes' => 'FabricanteController',
    'incidencias' => 'IncidenciaController',
    'dispositivos' => 'DispositivoController',
    'funcionarios' => 'FuncionarioController',
    'tipo-terceros' => 'TipoTerceroController',
    'tipo-servicios' => 'TipoServicioController',
    'tipo-productos' => 'TipoProductoController',
    'organizaciones' => 'OrganizacionController',
    'tipo-contratos' => 'TipoContratoController',
    'tipo-ubicaciones' => 'TipoUbicacionController',
    'tipo-componentes' => 'TipoComponenteController',
    'tipo-dispositivos' => 'TipoDispositivoController',
    'estado-incidencias' => 'EstadoIncidenciaController'
  ]);
});

/* Inducir errores de cliente y servidor */
Route::post('400', function () {
  abort(404, "Error 400 a propósito");
})->name('response.error.400');

Route::post('401', function () {
  abort(404, "Error 401 a propósito");
})->name('response.error.401');

Route::post('403', function () {
  abort(404, "Error 403 a propósito");
})->name('response.error.403');

Route::post('404', function () {
  abort(404, "Error 404 a propósito");
})->name('response.error.404');

Route::post('500', function () {
  abort(500, "Error de servidor a próposito");
})->name('response.error.500');
