<?php

namespace App\Http\Controllers;

use App\TipoTercero;
use Illuminate\Http\Request;
use App\Http\Resources\TipoTerceroResource;
use App\Http\Resources\TipoTerceroCollection;

class TipoTerceroController extends Controller
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
   * Devuelve una colección de Tipos de Tercero.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TipoTerceroCollection(TipoTercero::all());
  }

  /**
   * Guarda un Tipo de Tercero recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    TipoTercero::create($request->all());
  }

  /**
   * Muestra el Tipo de Tercero especificado.
   *
   * @param  \App\TipoTercero $tipoTercero
   * @return \Illuminate\Http\Response
   */
  public function show(TipoTercero $tipoTercero)
  {
    return new TipoTerceroResource($tipoTercero);
  }

  /**
   * Actualiza el Tipo de Tercero especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoTercero  $tipoTercero
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoTercero $tipoTercero)
  {
    $tipoTercero->save();
  }

  /**
   * Elimina el Tipo de Tercero especificado de la base de datos.
   *
   * @param  \App\TipoTercero  $tipoTercero
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoTercero $tipoTercero)
  {
    $tipoTercero->delete();
  }
}
