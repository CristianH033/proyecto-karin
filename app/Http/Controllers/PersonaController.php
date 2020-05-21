<?php

namespace App\Http\Controllers;

use App\Persona;
use Illuminate\Http\Request;
use App\Http\Requests\PersonaCreateRequest;
use App\Http\Requests\PersonaUpdateRequest;
use App\Http\Resources\PersonaResource;
use App\Http\Resources\PersonaCollection;

class PersonaController extends Controller
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
  public function store(PersonaCreateRequest $request)
  {
    Persona::create($request->all());
  }

  /**
   * Muestra el Persona especificado.
   *
   * @param  \App\Persona $persona
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
  public function update(PersonaUpdateRequest $request, Persona $persona)
  {
    $persona->save();
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
