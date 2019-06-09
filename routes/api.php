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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * @Author: Cristian Home
 * @Date: 2019-06-08 19:49:27
 * @Desc: Creación dínamica de rutas para acceder a los recursos a través de una API.
 */
Route::resources([
    'personas' => 'PersonaController',
    'paises' => 'PaisController',
    'estados' => 'EstadoController',
    'ciudades' => 'CiudadController',
    'sucursales' => 'SucursalController',
    'proveedores' => 'ProveedorController',
    'clientes' => 'ClienteController',
    'cargos' => 'CargoController',
    'funcionarios' => 'FuncionarioController',
    'dispositivos' => 'DispositivoController',
    'etiquetas' => 'EtiquetaController',
    'reportes' => 'ReporteController',
    'contratos' => 'ContratoController'
]);
