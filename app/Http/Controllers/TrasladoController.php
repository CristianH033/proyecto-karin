<?php

namespace App\Http\Controllers;

use App\Traslado;
use Illuminate\Http\Request;
use App\Http\Resources\TrasladoCollection;
use App\Http\Resources\Traslado as TrasladoResource;

class TrasladoController extends Controller
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
   * Devuelve una colección de Traslados.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TrasladoCollection(Traslado::all());
  }

  /**
   * Guarda un Traslado recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Traslado especificado.
   *
   * @param  \App\Traslado  $traslado
   * @return \Illuminate\Http\Response
   */
  public function show(Traslado $traslado)
  {
    return new TrasladoResource($traslado);
  }

  /**
   * Actualiza el Traslado especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Traslado  $traslado
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Traslado $traslado)
  {
    //
  }

  /**
   * Elimina el Traslado especificado de la base de datos.
   *
   * @param  \App\Traslado  $traslado
   * @return \Illuminate\Http\Response
   */
  public function destroy(Traslado $traslado)
  {
    $traslado->delete();
  }
}
