<?php

namespace App\Http\Controllers;

use App\EstadoIncidencia;
use Illuminate\Http\Request;
use App\Http\Requests\EstadoIncidenciaCreateRequest;
use App\Http\Requests\EstadoIncidenciaUpdateRequest;
use App\Http\Resources\EstadoIncidenciaResource;
use App\Http\Resources\EstadoIncidenciaCollection;

class EstadoIncidenciaController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(EstadoIncidenciaCreateRequest $request)
  {
    EstadoIncidencia::create($request->all());
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\EstadoIncidencia $estadoIncidencia
   * @return \Illuminate\Http\Response
   */
  public function show(EstadoIncidencia $estadoIncidencia)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\EstadoIncidencia  $estadoIncidencia
   * @return \Illuminate\Http\Response
   */
  public function update(EstadoIncidenciaUpdateRequest $request, EstadoIncidencia $estadoIncidencia)
  {
    $estadoIncidencia->save();
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\EstadoIncidencia  $estadoIncidencia
   * @return \Illuminate\Http\Response
   */
  public function destroy(EstadoIncidencia $estadoIncidencia)
  {
    $estadoIncidencia->delete();
  }
}
