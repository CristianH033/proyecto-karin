<?php

use Illuminate\Http\Request;

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
    Route::post('login', 'LoginController@login')->name('login');
    Route::post('refresh-token', 'LoginController@refreshAccessToken')->name(
      'refresh.token'
    );
    Route::post('register', 'RegisterController@register')->name('register');
    Route::post('logout', 'LoginController@logout')->name('logout');
    Route::get('current-user', 'LoggedUserController@getCurrentUser')->name(
      'auth.user'
    );
    Route::get('auth-check', 'LoggedUserController@checkAuth')->name(
      'auth.check'
    );
    Route::post(
      'password/email',
      'ForgotPasswordController@sendResetLinkEmail'
    )->name('requestResetPasswordEmail');
    Route::post('password/reset', 'ResetPasswordController@reset')->name(
      'resetPassword'
    );
    Route::post(
      'validate-pwdreset-token',
      'ResetPasswordController@checkValidToken'
    )->name('checkPasswordResetToken');
  });
  /**
   * Creación dínamica de rutas para todos los recursos (modelos-controladores)
   * Cada recurso creara una ruta para cada acción basica de CRUD
   * y su correspondiente verbo HTTP (POST, GET, PUT, DELETE)
   */
  Route::apiResources([
    'users' => 'UserController',
    'cargos' => 'CargoController',
    'ciudades' => 'CiudadController',
    'contratos' => 'ContratoController',
    'dispositivos' => 'DispositivoController',
    'estacion-trabajos' => 'EstacionTrabajoController',
    'estados' => 'EstadoController',
    'funcionarios' => 'FuncionarioController',
    'garantias' => 'GarantiaController',
    'modelos' => 'ModeloController',
    'operadores' => 'OperadorController',
    'paises' => 'PaisController',
    'personas' => 'PersonaController',
    'productos' => 'ProductoController',
    'proovedores' => 'TerceroController',
    'sedes' => 'SedeController',
    'servicios' => 'ServicioController',
    'tags' => 'TagController',
    'terceros' => 'TerceroController',
    'tipo-productos' => 'TipoProductoController',
    'tipo-servicios' => 'TipoServicioController'
  ]);
});

/* Inducir errores de cliente y servidor */
Route::post('400', function () {
  abort(404, "Error 400 a propósito");
});

Route::post('401', function () {
  abort(404, "Error 401 a propósito");
});

Route::post('403', function () {
  abort(404, "Error 403 a propósito");
});

Route::post('404', function () {
  abort(404, "Error 404 a propósito");
});

Route::post('500', function () {
  abort(500, "Error de servidor a próposito");
});

Route::post('500', function () {
  abort(500, "Error de servidor a proposito");
});
