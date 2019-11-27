<?php

namespace App\Http\Controllers;

use App\EstacionTrabajo;
use Illuminate\Http\Request;
use App\Http\Resources\EstacionTrabajoResource;
use App\Http\Resources\EstacionTrabajoCollection;

class EstacionTrabajoController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth:api');
    $this->middleware('verified');
    $this->middleware('otp');
  }

  /**
   * Devuelve una colección de Estaciones de Trabajo.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new EstacionTrabajoCollection(EstacionTrabajo::all());
  }

  /**
   * Guarda una Estacion de Trabajo recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra la Estacion de Trabajo especificada.
   *
   * @param  \App\EstacionTrabajo  $estacionTrabajo
   * @return \Illuminate\Http\Response
   */
  public function show(EstacionTrabajo $estacionTrabajo)
  {
    return new EstacionTrabajoResource($estacionTrabajo);
  }

  /**
   * Actualiza la Estacion de Trabajo especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\EstacionTrabajo  $estacionTrabajo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, EstacionTrabajo $estacionTrabajo)
  {
    //
  }

  /**
   * Elimina la Estacion de Trabajo especificada de la base de datos.
   *
   * @param  \App\EstacionTrabajo  $estacionTrabajo
   * @return \Illuminate\Http\Response
   */
  public function destroy(EstacionTrabajo $estacionTrabajo)
  {
    $estacionTrabajo->delete();
  }
}
