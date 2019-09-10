<?php

namespace App\Http\Controllers;

use App\Estado;
use Illuminate\Http\Request;
use App\Http\Resources\EstadoCollection;
use App\Http\Resources\Estado as EstadoResource;

class EstadoController extends Controller
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
   * Devuelve una colección de Estados.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new EstadoCollection(Estado::all());
  }

  /**
   * Guarda un Estado recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Estado especificado.
   *
   * @param  \App\Estado  $estado
   * @return \Illuminate\Http\Response
   */
  public function show(Estado $estado)
  {
    return new EstadoResource($estado);
  }

  /**
   * Actualiza el Estado especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Estado  $estado
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Estado $estado)
  {
    //
  }

  /**
   * Elimina el Estado especificado de la base de datos.
   *
   * @param  \App\Estado  $estado
   * @return \Illuminate\Http\Response
   */
  public function destroy(Estado $estado)
  {
    $estado->delete();
  }
}
