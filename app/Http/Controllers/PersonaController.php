<?php

namespace App\Http\Controllers;

use App\Persona;
use Illuminate\Http\Request;
use App\Http\Resources\PersonaCollection;
use App\Http\Resources\Persona as PersonaResource;

class PersonaController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    // $this->middleware('auth');
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new PersonaCollection(Persona::all());
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Persona  $persona
   * @return \Illuminate\Http\Response
   */
  public function show(Persona $persona)
  {
    return new PersonaResource($persona);
  }

  /**
   * Update the specified resource in storage.
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
   * Remove the specified resource from storage.
   *
   * @param  \App\Persona  $persona
   * @return \Illuminate\Http\Response
   */
  public function destroy(Persona $persona)
  {
    $persona->delete();
  }
}
