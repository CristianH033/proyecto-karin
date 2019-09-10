<?php

namespace App\Http\Controllers;

use App\Inicidencia;
use Illuminate\Http\Request;
use App\Http\Resources\InicidenciaCollection;
use App\Http\Resources\Inicidencia as InicidenciaResource;

class InicidenciaController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new InicidenciaCollection(Inicidencia::all());
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
   * @param  \App\Inicidencia  $inicidencia
   * @return \Illuminate\Http\Response
   */
  public function show(Inicidencia $inicidencia)
  {
    return new InicidenciaResource($inicidencia);
  }

  /**
   * Update the specified resource in storage.
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
   * Remove the specified resource from storage.
   *
   * @param  \App\Inicidencia  $inicidencia
   * @return \Illuminate\Http\Response
   */
  public function destroy(Inicidencia $inicidencia)
  {
    $inicidencia->delete();
  }
}
