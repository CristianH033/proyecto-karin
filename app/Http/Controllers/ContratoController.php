<?php

namespace App\Http\Controllers;

use App\Contrato;
use Illuminate\Http\Request;
use App\Http\Resources\ContratoCollection;
use App\Http\Resources\ContratoResource;

class ContratoController extends Controller
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
   * Devuelve una colección de Contratos.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new ContratoCollection(Contrato::all());
  }

  /**
   * Guarda un Contrato recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Contrato especificado.
   *
   * @param  \App\Contrato  $contrato
   * @return \Illuminate\Http\Response
   */
  public function show(Contrato $contrato)
  {
    return new ContratoResource($contrato);
  }

  /**
   * Actualiza el Contrato especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Contrato  $contrato
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Contrato $contrato)
  {
    //
  }

  /**
   * Elimina el Contrato especificado de la base de datos.
   *
   * @param  \App\Contrato  $contrato
   * @return \Illuminate\Http\Response
   */
  public function destroy(Contrato $contrato)
  {
    $contrato->delete();
  }
}
