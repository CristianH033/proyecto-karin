<?php

namespace App\Http\Controllers;

use App\Traslado;
use Illuminate\Http\Request;
use App\Http\Resources\TrasladoCollection;
use App\Http\Resources\Traslado as TrasladoResource;

class TrasladoController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TrasladoCollection(Traslado::all());
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
   * @param  \App\Traslado  $traslado
   * @return \Illuminate\Http\Response
   */
  public function show(Traslado $traslado)
  {
    return new TrasladoResource($traslado);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Traslado  $traslado
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Traslado $traslado)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Traslado  $traslado
   * @return \Illuminate\Http\Response
   */
  public function destroy(Traslado $traslado)
  {
    $traslado->delete();
  }
}
