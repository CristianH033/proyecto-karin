<?php

namespace App\Http\Controllers;

use App\Pais;
use Illuminate\Http\Request;
use App\Http\Resources\PaisCollection;
use App\Http\Resources\Pais as PaisResource;

class PaisController extends Controller
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
   * Devuelve una colección de Paises.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new PaisCollection(Pais::all());
  }

  /**
   * Guarda un Pais recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Pais especificado.
   *
   * @param  \App\Pais  $pais
   * @return \Illuminate\Http\Response
   */
  public function show(Pais $pais)
  {
    return new PaisResource($pais);
  }

  /**
   * Actualiza el Pais especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Pais  $pais
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Pais $pais)
  {
    //
  }

  /**
   * Elimina el Pais especificado de la base de datos.
   *
   * @param  \App\Pais  $pais
   * @return \Illuminate\Http\Response
   */
  public function destroy(Pais $pais)
  {
    $pais->delete();
  }
}
