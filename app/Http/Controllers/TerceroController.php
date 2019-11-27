<?php

namespace App\Http\Controllers;

use App\Tercero;
use Illuminate\Http\Request;
use App\Http\Resources\TerceroResource;
use App\Http\Resources\TerceroCollection;

class TerceroController extends Controller
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
   * Devuelve una colección de Terceros.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TerceroCollection(Tercero::all());
  }

  /**
   * Guarda un Tercero recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Tercero especificado.
   *
   * @param  \App\Tercero  $tercero
   * @return \Illuminate\Http\Response
   */
  public function show(Tercero $tercero)
  {
    return new TerceroResource($tercero);
  }

  /**
   * Actualiza el Tercero especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Tercero  $tercero
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Tercero $tercero)
  {
    //
  }

  /**
   * Elimina el Tercero especificado de la base de datos.
   *
   * @param  \App\Tercero  $tercero
   * @return \Illuminate\Http\Response
   */
  public function destroy(Tercero $tercero)
  {
    $tercero->delete();
  }
}
