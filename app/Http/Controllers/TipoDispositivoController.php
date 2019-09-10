<?php

namespace App\Http\Controllers;

use App\TipoDispositivo;
use Illuminate\Http\Request;
use App\Http\Resources\TipoDispositivoCollection;
use App\Http\Resources\TipoDispositivo as TipoDispositivoResource;

class TipoDispositivoController extends Controller
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
    return new TipoDispositivoCollection(TipoDispositivo::all());
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
   * @param  \App\TipoDispositivo  $tipoDispositivo
   * @return \Illuminate\Http\Response
   */
  public function show(TipoDispositivo $tipoDispositivo)
  {
    return new TipoDispositivoResource($tipoDispositivo);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoDispositivo  $tipoDispositivo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoDispositivo $tipoDispositivo)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\TipoDispositivo  $tipoDispositivo
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoDispositivo $tipoDispositivo)
  {
    $tipoDispositivo->delete();
  }
}
