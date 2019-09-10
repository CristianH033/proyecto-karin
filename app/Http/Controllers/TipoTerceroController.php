<?php

namespace App\Http\Controllers;

use App\TipoTercero;
use Illuminate\Http\Request;
use App\Http\Resources\TipoTerceroCollection;
use App\Http\Resources\TipoTercero as TipoTerceroResource;

class TipoTerceroController extends Controller
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
    return new TipoTerceroCollection(TipoTercero::all());
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
   * @param  \App\TipoTercero  $tipoTercero
   * @return \Illuminate\Http\Response
   */
  public function show(TipoTercero $tipoTercero)
  {
    return new TipoTerceroResource($tipoTercero);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoTercero  $tipoTercero
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoTercero $tipoTercero)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\TipoTercero  $tipoTercero
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoTercero $tipoTercero)
  {
    $tipoTercero->delete();
  }
}
