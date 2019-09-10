<?php

namespace App\Http\Controllers;

use App\TipoServicio;
use Illuminate\Http\Request;
use App\Http\Resources\TipoServicioCollection;
use App\Http\Resources\TipoServicio as TipoServicioResource;

class TipoServicioController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TipoServicioCollection(TipoServicio::all());
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
   * @param  \App\TipoServicio  $tipoServicio
   * @return \Illuminate\Http\Response
   */
  public function show(TipoServicio $tipoServicio)
  {
    return new TipoServicioResource($tipoServicio);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoServicio  $tipoServicio
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoServicio $tipoServicio)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\TipoServicio  $tipoServicio
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoServicio $tipoServicio)
  {
    $tipoServicio->delete();
  }
}
