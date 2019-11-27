<?php

namespace App\Http\Controllers;

use App\Dispositivo;
use Illuminate\Http\Request;
use App\Http\Resources\DispositivoResource;
use App\Http\Resources\DispositivoCollection;

class DispositivoController extends Controller
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
   * Devuelve una colección de Dispositivos.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new DispositivoCollection(Dispositivo::all());
  }

  /**
   * Guarda un Dispositivo recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Dispositivo especificado.
   *
   * @param  \App\Dispositivo  $dispositivo
   * @return \Illuminate\Http\Response
   */
  public function show(Dispositivo $dispositivo)
  {
    return new DispositivoResource($dispositivo);
  }

  /**
   * Actualiza el Dispositivo especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Dispositivo  $dispositivo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Dispositivo $dispositivo)
  {
    //
  }

  /**
   * Elimina el Dispositivo especificado de la base de datos.
   *
   * @param  \App\Dispositivo  $dispositivo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Dispositivo $dispositivo)
  {
    $dispositivo->delete();
  }
}
