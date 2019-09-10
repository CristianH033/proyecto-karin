<?php

namespace App\Http\Controllers;

use App\Servicio;
use Illuminate\Http\Request;
use App\Http\Resources\ServicioCollection;
use App\Http\Resources\Servicio as ServicioResource;

class ServicioController extends Controller
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
   * Devuelve una colección de Servicios.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new ServicioCollection(Servicio::all());
  }

  /**
   * Guarda un Servicio recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Servicio especificado.
   *
   * @param  \App\Servicio  $servicio
   * @return \Illuminate\Http\Response
   */
  public function show(Servicio $servicio)
  {
    return new ServicioResource($servicio);
  }

  /**
   * Actualiza el Servicio especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Servicio  $servicio
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Servicio $servicio)
  {
    //
  }

  /**
   * Elimina el Servicio especificado de la base de datos.
   *
   * @param  \App\Servicio  $servicio
   * @return \Illuminate\Http\Response
   */
  public function destroy(Servicio $servicio)
  {
    $servicio->delete();
  }
}
