<?php

namespace App\Http\Controllers;

use App\TipoComponente;
use Illuminate\Http\Request;

class TipoComponenteController extends Controller
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
  public function store(Request $request)
  {
    TipoComponente::create($request->all());
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\TipoComponente $tipoComponente
   * @return \Illuminate\Http\Response
   */
  public function show(TipoComponente $tipoComponente)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoComponente  $tipoComponente
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoComponente $tipoComponente)
  {
    $tipoComponente->save();
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\TipoComponente  $tipoComponente
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoComponente $tipoComponente)
  {
    $tipoComponente->delete();
  }
}
