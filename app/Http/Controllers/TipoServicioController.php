<?php

namespace App\Http\Controllers;

use App\TipoServicio;
use Illuminate\Http\Request;
use App\Http\Resources\TipoServicioResource;
use App\Http\Resources\TipoServicioCollection;

class TipoServicioController extends Controller
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
   * Devuelve una colección de Tipos de Servicio.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TipoServicioCollection(TipoServicio::all());
  }

  /**
   * Guarda un Tipo de Servicio recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    TipoServicio::create($request->all());
  }

  /**
   * Muestra el Tipo de Servicio especificado.
   *
   * @param  \App\TipoServicio $tipoServicio
   * @return \Illuminate\Http\Response
   */
  public function show(TipoServicio $tipoServicio)
  {
    return new TipoServicioResource($tipoServicio);
  }

  /**
   * Actualiza el Tipo de Servicio especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoServicio  $tipoServicio
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoServicio $tipoServicio)
  {
    $tipoServicio->save();
  }

  /**
   * Elimina el Tipo de Servicio especificado de la base de datos.
   *
   * @param  \App\TipoServicio  $tipoServicio
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoServicio $tipoServicio)
  {
    $tipoServicio->delete();
  }
}
