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
    Route::get('user', 'LoginController@getCurrentUser')->name('auth.user');
    Route::post('login', 'LoginController@login')->name('login');
    Route::post('register', 'RegisterController@register')->name('register');
    Route::post('logout', 'LoginController@logout')->name('logout');
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

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function () {
  Route::put('/user', 'LoggedUserController@update');
});
