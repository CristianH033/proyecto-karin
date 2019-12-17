<?php

namespace App\Http\Controllers;

use App\Incidencia;
use Illuminate\Http\Request;
use App\Http\Resources\IncidenciaResource;
use App\Http\Resources\IncidenciaCollection;

class IncidenciaController extends Controller
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
   * Devuelve una colección de Incidencias.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new IncidenciaCollection(Incidencia::all());
  }

  /**
   * Guarda una Incidencia recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    Incidencia::create($request->all());
  }

  /**
   * Muestra la Incidencia especificada.
   *
   * @param  \App\Incidencia $incidencia
   * @return \Illuminate\Http\Response
   */
  public function show(Incidencia $incidencia)
  {
    return new IncidenciaResource($incidencia);
  }

  /**
   * Actualiza la Incidencia especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Incidencia  $incidencia
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Incidencia $incidencia)
  {
    $incidencia->save();
  }

  /**
   * Elimina la Incidencia especificada de la base de datos.
   *
   * @param  \App\Incidencia  $incidencia
   * @return \Illuminate\Http\Response
   */
  public function destroy(Incidencia $incidencia)
  {
    $incidencia->delete();
  }
}
