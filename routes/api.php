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
 * Controladores que se encuentran dentro de la carpeta API\Auh
 */
Route::namespace('API\Auth')->group(function () {
    Route::get('user', 'LoginController@getCurrentUser')->name('auth.user');
    Route::post('login', 'LoginController@login')->name('login');
    Route::post('register', 'RegisterController@register')->name('register');
    Route::post('logout', 'LoginController@logout')->name('logout');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('requestResetPasswordEmail');
    Route::post('password/reset', 'ResetPasswordController@reset')->name('resetPassword');
    Route::post('validate-pwdreset-token', 'ResetPasswordController@checkValidToken')->name('checkPasswordResetToken');
});

/**
 * @Author: Cristian Home
 * @Date: 2019-06-08 19:49:27
 * @Desc: Creación dínamica de rutas para acceder a los recursos a través de una API.
 */
Route::apiResources([
    
]);
