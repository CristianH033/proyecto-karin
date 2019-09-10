<?php

namespace App\Http\Controllers;

use App\Fabricante;
use Illuminate\Http\Request;
use App\Http\Resources\FabricanteCollection;
use App\Http\Resources\Fabricante as FabricanteResource;

class FabricanteController extends Controller
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
   * Devuelve una colección de Fabricantes.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new FabricanteCollection(Fabricante::all());
  }

  /**
   * Guarda un Fabricante recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Fabricante especificado.
   *
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function show(Fabricante $fabricante)
  {
    return new FabricanteResource($fabricante);
  }

  /**
   * Actualiza el Fabricante especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Fabricante $fabricante)
  {
    //
  }

  /**
   * Elimina el Fabricante especificado de la base de datos.
   *
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function destroy(Fabricante $fabricante)
  {
    $fabricante->delete();
  }
}
