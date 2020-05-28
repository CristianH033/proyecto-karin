<?php

namespace App\Http\Controllers;

use App\TipoContrato;
use Illuminate\Http\Request;
use App\Http\Requests\TipoContratoCreateRequest;
use App\Http\Requests\TipoContratoUpdateRequest;
use App\Http\Resources\TipoContratoResource;
use App\Http\Resources\TipoContratoCollection;

class TipoContratoController extends Controller
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
   * Devuelve una colección de Tipos de Contrato.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TipoContratoCollection(TipoContrato::all());
  }

  /**
   * Guarda un Tipo de Contrato recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(TipoContratoCreateRequest $request)
  {
    TipoContrato::create($request->all());
  }

  /**
   * Muestra el Tipo de Contrato especificado.
   *
   * @param  \App\TipoContrato $tipoContrato
   * @return \Illuminate\Http\Response
   */
  public function show(TipoContrato $tipoContrato)
  {
    return new TipoContratoResource($tipoContrato);
  }

  /**
   * Actualiza el Tipo de Contrato especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoContrato  $tipoContrato
   * @return \Illuminate\Http\Response
   */
  public function update(
    TipoContratoUpdateRequest $request,
    TipoContrato $tipoContrato
  ) {
    $tipoContrato->save();
  }

  /**
   * Elimina el Tipo de Contrato especificado de la base de datos.
   *
   * @param  \App\TipoContrato  $tipoContrato
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoContrato $tipoContrato)
  {
    $tipoContrato->delete();
  }
}
