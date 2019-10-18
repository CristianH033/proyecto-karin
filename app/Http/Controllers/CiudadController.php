<?php

namespace App\Http\Controllers;

use App\Ciudad;
use Illuminate\Http\Request;
use App\Http\Resources\CiudadCollection;
use App\Http\Resources\CiudadResource;

class CiudadController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth:api');
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
  public function store(Request $request)
  {
    $request->validate([
      'nombre' => 'required|max:255',
      'estado_id' => 'required|exists:estados,id'
    ]);

    Ciudad::create([
      "nombre" => $request->nombre,
      "estado_id" => $request->estado_id
    ]);
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
  public function update(Request $request, Ciudad $ciudad)
  {
    $request->validate([
      'nombre' => 'required|max:255',
      'estado_id' => 'required|exists:estados,id'
    ]);

    $ciudad->nombre = $request->nombre;
    $ciudad->estado_id = $request->estado_id;

    $ciudad->save();
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
