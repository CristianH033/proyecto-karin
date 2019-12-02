<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');

// SPA (Vue) Routes
Route::get('/#/reset-password', 'HomeController@index')->name(
  'spa.password.reset'
);
Route::get('/#/email/verify', 'HomeController@index')->name(
  'spa.verification.verify'
);
