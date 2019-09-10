<?php

namespace App\Http\Controllers;

use App\TipoContrato;
use Illuminate\Http\Request;
use App\Http\Resources\TipoContratoCollection;
use App\Http\Resources\TipoContrato as TipoContratoResource;

class TipoContratoController extends Controller
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
    return new TipoContratoCollection(TipoContrato::all());
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
   * @param  \App\TipoContrato  $tipoContrato
   * @return \Illuminate\Http\Response
   */
  public function show(TipoContrato $tipoContrato)
  {
    return new TipoContratoResource($tipoContrato);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoContrato  $tipoContrato
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoContrato $tipoContrato)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\TipoContrato  $tipoContrato
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoContrato $tipoContrato)
  {
    $tipoContrato->delete();
  }
}
