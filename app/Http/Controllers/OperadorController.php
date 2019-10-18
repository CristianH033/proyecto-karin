<?php

namespace App\Http\Controllers;

use App\Operador;
use Illuminate\Http\Request;
use App\Http\Resources\OperadorCollection;
use App\Http\Resources\OperadorResource;

class OperadorController extends Controller
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
   * Devuelve una colección de Operadores.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new OperadorCollection(Operador::all());
  }

  /**
   * Guarda un Operador recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Operador especificado.
   *
   * @param  \App\Operador  $operador
   * @return \Illuminate\Http\Response
   */
  public function show(Operador $operador)
  {
    return new OperadorResource($operador);
  }

  /**
   * Actualiza el Operador especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Operador  $operador
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Operador $operador)
  {
    //
  }

  /**
   * Elimina el Operador especificado de la base de datos.
   *
   * @param  \App\Operador  $operador
   * @return \Illuminate\Http\Response
   */
  public function destroy(Operador $operador)
  {
    $operador->delete();
  }
}
