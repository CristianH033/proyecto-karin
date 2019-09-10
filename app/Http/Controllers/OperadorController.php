<?php

namespace App\Http\Controllers;

use App\Operador;
use Illuminate\Http\Request;
use App\Http\Resources\OperadorCollection;
use App\Http\Resources\Operador as OperadorResource;

class OperadorController extends Controller
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
    return new OperadorCollection(Operador::all());
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
   * @param  \App\Operador  $operador
   * @return \Illuminate\Http\Response
   */
  public function show(Operador $operador)
  {
    return new OperadorResource($operador);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Operador  $operador
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Operador $operador)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Operador  $operador
   * @return \Illuminate\Http\Response
   */
  public function destroy(Operador $operador)
  {
    $operador->delete();
  }
}
