<?php

namespace App\Http\Controllers;

use App\Estado;
use Illuminate\Http\Request;
use App\Http\Resources\EstadoCollection;
use App\Http\Resources\Estado as EstadoResource;

class EstadoController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new EstadoCollection(Estado::all());
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
   * @param  \App\Estado  $estado
   * @return \Illuminate\Http\Response
   */
  public function show(Estado $estado)
  {
    return new EstadoResource($estado);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Estado  $estado
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Estado $estado)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Estado  $estado
   * @return \Illuminate\Http\Response
   */
  public function destroy(Estado $estado)
  {
    $estado->delete();
  }
}
