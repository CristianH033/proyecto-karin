<?php

namespace App\Http\Controllers;

use App\Inicidencia;
use Illuminate\Http\Request;
use App\Http\Resources\InicidenciaCollection;
use App\Http\Resources\Inicidencia as InicidenciaResource;

class InicidenciaController extends Controller
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
   * Devuelve una colección de Inicidencias.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new InicidenciaCollection(Inicidencia::all());
  }

  /**
   * Guarda una Inicidencia recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra la Inicidencia especificada.
   *
   * @param  \App\Inicidencia  $inicidencia
   * @return \Illuminate\Http\Response
   */
  public function show(Inicidencia $inicidencia)
  {
    return new InicidenciaResource($inicidencia);
  }

  /**
   * Actualiza la Inicidencia especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Inicidencia  $inicidencia
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Inicidencia $inicidencia)
  {
    //
  }

  /**
   * Elimina la Inicidencia especificada de la base de datos.
   *
   * @param  \App\Inicidencia  $inicidencia
   * @return \Illuminate\Http\Response
   */
  public function destroy(Inicidencia $inicidencia)
  {
    $inicidencia->delete();
  }
}
