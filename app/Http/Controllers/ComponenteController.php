<?php

namespace App\Http\Controllers;

use App\Componente;
use Illuminate\Http\Request;
use App\Http\Resources\ComponenteCollection;
use App\Http\Resources\Componente as ComponenteResource;

class ComponenteController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new ComponenteCollection(Componente::all());
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
   * @param  \App\Componente  $componente
   * @return \Illuminate\Http\Response
   */
  public function show(Componente $componente)
  {
    return new ComponenteResource($componente);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Componente  $componente
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Componente $componente)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Componente  $componente
   * @return \Illuminate\Http\Response
   */
  public function destroy(Componente $componente)
  {
    $componente->delete();
  }
}
