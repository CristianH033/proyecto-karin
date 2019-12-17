<?php

namespace App\Http\Controllers;

use App\TipoDispositivo;
use Illuminate\Http\Request;
use App\Http\Resources\TipoDispositivoResource;
use App\Http\Resources\TipoDispositivoCollection;

class TipoDispositivoController extends Controller
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
   * Devuelve una colección de Tipos de Dispositivo.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TipoDispositivoCollection(TipoDispositivo::all());
  }

  /**
   * Guarda un Tipo de Dispositivo recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    TipoDispositivo::create($request->all());
  }

  /**
   * Muestra el Tipo de Dispositivo especificado.
   *
   * @param  \App\TipoDispositivo $tipoDispositivo
   * @return \Illuminate\Http\Response
   */
  public function show(TipoDispositivo $tipoDispositivo)
  {
    return new TipoDispositivoResource($tipoDispositivo);
  }

  /**
   * Actualiza el Tipo de Dispositivo especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoDispositivo  $tipoDispositivo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoDispositivo $tipoDispositivo)
  {
    $tipoDispositivo->save();
  }

  /**
   * Elimina el Tipo de Dispositivo especificado de la base de datos.
   *
   * @param  \App\TipoDispositivo  $tipoDispositivo
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoDispositivo $tipoDispositivo)
  {
    $tipoDispositivo->delete();
  }
}
