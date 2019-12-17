<?php

namespace App\Http\Controllers;

use App\TipoUbicacion;
use Illuminate\Http\Request;
use App\Http\Resources\TipoUbicacionResource;
use App\Http\Resources\TipoUbicacionCollection;

class TipoTipoUbicacionController extends Controller
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
   * Devuelve una colección de ubicaciones.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TipoUbicacionCollection(TipoUbicacion::all());
  }

  /**
   * Guarda una ubicación recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    TipoUbicacion::create($request->all());
  }

  /**
   * Muestra la ubicación especificada.
   *
   * @param  \App\TipoUbicacion $tipoUbicacion
   * @return \Illuminate\Http\Response
   */
  public function show(TipoUbicacion $tipoUbicacion)
  {
    return new TipoUbicacionResource($tipoUbicacion);
  }

  /**
   * Actualiza la ubicación especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoUbicacion  $tipoUbicacion
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoUbicacion $tipoUbicacion)
  {
    $tipoUbicacion->save();
  }

  /**
   * Elimina la ubicación especificada de la base de datos.
   *
   * @param  \App\TipoUbicacion  $tipoUbicacion
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoUbicacion $tipoUbicacion)
  {
    $tipoUbicacion->delete();
  }
}
