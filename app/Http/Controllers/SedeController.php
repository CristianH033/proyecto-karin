<?php

namespace App\Http\Controllers;

use App\Sede;
use Illuminate\Http\Request;
use App\Http\Resources\SedeCollection;
use App\Http\Resources\SedeResource;

class SedeController extends Controller
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
   * Devuelve una colección de Sedes.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new SedeCollection(Sede::all());
  }

  /**
   * Guarda una Sede recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra la Sede especificada.
   *
   * @param  \App\Sede  $sede
   * @return \Illuminate\Http\Response
   */
  public function show(Sede $sede)
  {
    return new SedeResource($sede);
  }

  /**
   * Actualiza la Sede especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Sede  $sede
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Sede $sede)
  {
    //
  }

  /**
   * Elimina la Sede especificada de la base de datos.
   *
   * @param  \App\Sede  $sede
   * @return \Illuminate\Http\Response
   */
  public function destroy(Sede $sede)
  {
    $sede->delete();
  }
}
