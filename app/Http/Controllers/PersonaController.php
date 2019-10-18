<?php

namespace App\Http\Controllers;

use App\Persona;
use Illuminate\Http\Request;
use App\Http\Resources\PersonaCollection;
use App\Http\Resources\PersonaResource;

class PersonaController extends Controller
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
   * Devuelve una colección de Personas.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new PersonaCollection(Persona::all());
  }

  /**
   * Guarda un Persona recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Persona especificado.
   *
   * @param  \App\Persona  $persona
   * @return \Illuminate\Http\Response
   */
  public function show(Persona $persona)
  {
    return new PersonaResource($persona);
  }

  /**
   * Actualiza el Persona especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Persona  $persona
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Persona $persona)
  {
    //
  }

  /**
   * Elimina el Persona especificado de la base de datos.
   *
   * @param  \App\Persona  $persona
   * @return \Illuminate\Http\Response
   */
  public function destroy(Persona $persona)
  {
    $persona->delete();
  }
}
