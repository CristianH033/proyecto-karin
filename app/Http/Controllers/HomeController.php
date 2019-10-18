<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\HomeCollection;
use App\Http\Resources\HomeResource;

class HomeController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    // $this->middleware('auth');
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
