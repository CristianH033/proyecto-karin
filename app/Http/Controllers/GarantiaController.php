<?php

namespace App\Http\Controllers;

use App\Garantia;
use Illuminate\Http\Request;
use App\Http\Resources\GarantiaResource;
use App\Http\Resources\GarantiaCollection;

class GarantiaController extends Controller
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
    Garantia::create($request->all());
  }

  /**
   * Muestra la Garantia especificada.
   *
   * @param  \App\Garantia $garantia
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
    $garantia->save();
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
