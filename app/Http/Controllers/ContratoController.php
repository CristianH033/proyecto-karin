<?php

namespace App\Http\Controllers;

use App\Contrato;
use Illuminate\Http\Request;
use App\Http\Resources\ContratoCollection;
use App\Http\Resources\Contrato as ContratoResource;

class ContratoController extends Controller
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
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Contrato  $contrato
   * @return \Illuminate\Http\Response
   */
  public function show(Contrato $contrato)
  {
    //
  }

    /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Contrato  $contrato
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Contrato $contrato)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Contrato  $contrato
   * @return \Illuminate\Http\Response
   */
  public function destroy(Contrato $contrato)
  {
    //
  }
}
