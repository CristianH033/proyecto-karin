<?php

namespace App\Http\Controllers;

use App\Componente;
use App\Http\Resources\ComponenteResource;
use App\Http\Resources\ComponenteCollection;
use App\Http\Requests\ComponenteCreateRequest;
use App\Http\Requests\ComponenteUpdateRequest;

class ComponenteController extends Controller
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
  public function store(ComponenteCreateRequest $request)
  {
    Componente::create(
      $request->only(
        'modelo_id',
        'tipo_componente_id',
        'ubicacion_id',
        'dispositivo_id',
        'serial',
        'caracteristicas_tecnicas'
      )
    );
  }

  /**
   * Muestra el Componente especificado.
   *
   * @param  \App\Componente $componente
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
  public function update(
    ComponenteUpdateRequest $request,
    Componente $componente
  ) {
    $componente->update(
      $request->only(
        'modelo_id',
        'tipo_componente_id',
        'ubicacion_id',
        'dispositivo_id',
        'serial',
        'caracteristicas_tecnicas'
      )
    );
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
