<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\HomeResource;
use App\Http\Resources\HomeCollection;

class HomeController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    // $this->middleware('auth:api');
    // $this->middleware('verified');
    // $this->middleware('otp');
  }

  /**
   * Retorna la vista Home (inicio)
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return view('home');
  }
}
