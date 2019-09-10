<?php

namespace App\Http\Controllers;

use App\Modelo;
use Illuminate\Http\Request;
use App\Http\Resources\ModeloCollection;
use App\Http\Resources\Modelo as ModeloResource;

class ModeloController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new ModeloCollection(Modelo::all());
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
   * @param  \App\Modelo  $modelo
   * @return \Illuminate\Http\Response
   */
  public function show(Modelo $modelo)
  {
    return new ModeloResource($modelo);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Modelo  $modelo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Modelo $modelo)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Modelo  $modelo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Modelo $modelo)
  {
    $modelo->delete();
  }
}
