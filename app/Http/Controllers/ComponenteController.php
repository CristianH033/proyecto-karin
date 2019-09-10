<?php

namespace App\Http\Controllers;

use App\Componente;
use Illuminate\Http\Request;
use App\Http\Resources\ComponenteCollection;
use App\Http\Resources\Componente as ComponenteResource;

class ComponenteController extends Controller
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
   * Devuelve una colección de Componentes.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new ComponenteCollection(Componente::all());
  }

  /**
   * Guarda un Componente recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Componente especificado.
   *
   * @param  \App\Componente  $componente
   * @return \Illuminate\Http\Response
   */
  public function show(Componente $componente)
  {
    return new ComponenteResource($componente);
  }

  /**
   * Actualiza el Componente especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Componente  $componente
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Componente $componente)
  {
    //
  }

  /**
   * Elimina el Componente especificado de la base de datos.
   *
   * @param  \App\Componente  $componente
   * @return \Illuminate\Http\Response
   */
  public function destroy(Componente $componente)
  {
    $componente->delete();
  }
}
