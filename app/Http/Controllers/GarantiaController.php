<?php

namespace App\Http\Controllers;

use App\Garantia;
use Illuminate\Http\Request;
use App\Http\Resources\GarantiaCollection;
use App\Http\Resources\Garantia as GarantiaResource;

class GarantiaController extends Controller
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
   * Devuelve una colección de Garantias.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new GarantiaCollection(Garantia::all());
  }

  /**
   * Guarda una Garantia recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra la Garantia especificada.
   *
   * @param  \App\Garantia  $garantia
   * @return \Illuminate\Http\Response
   */
  public function show(Garantia $garantia)
  {
    return new GarantiaResource($garantia);
  }

  /**
   * Actualiza la Garantia especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Garantia  $garantia
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Garantia $garantia)
  {
    //
  }

  /**
   * Elimina la Garantia especificada de la base de datos.
   *
   * @param  \App\Garantia  $garantia
   * @return \Illuminate\Http\Response
   */
  public function destroy(Garantia $garantia)
  {
    $garantia->delete();
  }
}
