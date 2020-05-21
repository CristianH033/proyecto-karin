<?php

namespace App\Http\Controllers;

use App\Ciudad;
use Illuminate\Http\Request;
use App\Http\Resources\CiudadResource;
use App\Http\Resources\CiudadCollection;
use App\Http\Requests\CiudadCreateRequest;
use App\Http\Requests\CiudadUpdateRequest;

class CiudadController extends Controller
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
   * Devuelve una colección de Ciudades.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new CiudadCollection(Ciudad::all());
  }

  /**
   * Guarda una Ciudad recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(CiudadCreateRequest $request)
  {
    Ciudad::create($request->only('nombre', 'estado_id'));
  }

  /**
   * Muestra la Ciudad especificada.
   *
   * @param  \App\Ciudad  $ciudad
   * @return \Illuminate\Http\Response
   */
  public function show(Ciudad $ciudad)
  {
    return new CiudadResource($ciudad);
  }

  /**
   * Actualiza la Ciudad especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Ciudad  $ciudad
   * @return \Illuminate\Http\Response
   */
  public function update(CiudadUpdateRequest $request, Ciudad $ciudad)
  {
    $ciudad->update($request->only('nombre', 'estado_id'));
  }

  /**
   * Elimina la Ciudad especificada de la base de datos.
   *
   * @param  \App\Ciudad  $ciudad
   * @return \Illuminate\Http\Response
   */
  public function destroy(Ciudad $ciudad)
  {
    $ciudad->delete();
  }
}
