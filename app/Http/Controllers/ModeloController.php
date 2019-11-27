<?php

namespace App\Http\Controllers;

use App\Modelo;
use Illuminate\Http\Request;
use App\Http\Resources\ModeloResource;
use App\Http\Resources\ModeloCollection;

class ModeloController extends Controller
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
   * Devuelve una colección de Modelos.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new ModeloCollection(Modelo::all());
  }

  /**
   * Guarda un Modelo recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Modelo especificado.
   *
   * @param  \App\Modelo  $modelo
   * @return \Illuminate\Http\Response
   */
  public function show(Modelo $modelo)
  {
    return new ModeloResource($modelo);
  }

  /**
   * Actualiza el Modelo especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Modelo  $modelo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Modelo $modelo)
  {
    //
  }

  /**
   * Elimina el Modelo especificado de la base de datos.
   *
   * @param  \App\Modelo  $modelo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Modelo $modelo)
  {
    $modelo->delete();
  }
}
