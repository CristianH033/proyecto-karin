<?php

namespace App\Http\Controllers;

use App\Servicio;
use Illuminate\Http\Request;
use App\Http\Resources\ServicioResource;
use App\Http\Resources\ServicioCollection;

class ServicioController extends Controller
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
    Servicio::create($request->all());
  }

  /**
   * Muestra el Servicio especificado.
   *
   * @param  \App\Servicio $servicio
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
    $servicio->save();
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
