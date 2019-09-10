<?php

namespace App\Http\Controllers;

use App\Otrosi;
use Illuminate\Http\Request;
use App\Http\Resources\OtrosiCollection;
use App\Http\Resources\Otrosi as OtrosiResource;

class OtrosiController extends Controller
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
   * Devuelve una colección de Otrosi.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new OtrosiCollection(Otrosi::all());
  }

  /**
   * Guarda un Otrosi recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Otrosi especificado.
   *
   * @param  \App\Otrosi  $otrosi
   * @return \Illuminate\Http\Response
   */
  public function show(Otrosi $otrosi)
  {
    return new OtrosiResource($otrosi);
  }

  /**
   * Actualiza el Otrosi especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Otrosi  $otrosi
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Otrosi $otrosi)
  {
    //
  }

  /**
   * Elimina el Otrosi especificado de la base de datos.
   *
   * @param  \App\Otrosi  $otrosi
   * @return \Illuminate\Http\Response
   */
  public function destroy(Otrosi $otrosi)
  {
    $otrosi->delete();
  }
}
