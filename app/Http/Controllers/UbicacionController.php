<?php

namespace App\Http\Controllers;

use App\Ubicacion;
use Illuminate\Http\Request;
use App\Http\Resources\UbicacionResource;
use App\Http\Resources\UbicacionCollection;

class UbicacionController extends Controller
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
    return new UbicacionCollection(Ubicacion::all());
  }

  /**
   * Guarda una ubicación recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    Ubicacion::create($request->all());
  }

  /**
   * Muestra la ubicación especificada.
   *
   * @param  \App\Ubicacion $ubicacion
   * @return \Illuminate\Http\Response
   */
  public function show(Ubicacion $ubicacion)
  {
    return new UbicacionResource($ubicacion);
  }

  /**
   * Actualiza la ubicación especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Ubicacion  $ubicacion
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Ubicacion $ubicacion)
  {
    $ubicacion->save();
  }

  /**
   * Elimina la ubicación especificada de la base de datos.
   *
   * @param  \App\Ubicacion  $ubicacion
   * @return \Illuminate\Http\Response
   */
  public function destroy(Ubicacion $ubicacion)
  {
    $ubicacion->delete();
  }
}
