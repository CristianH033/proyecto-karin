<?php

namespace App\Http\Controllers;

use App\Inventario;
use Illuminate\Http\Request;
use App\Http\Resources\InventarioCollection;
use App\Http\Resources\Inventario as InventarioResource;

class InventarioController extends Controller
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
    return new InventarioCollection(Inventario::all());
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
   * @param  \App\Inventario  $inventario
   * @return \Illuminate\Http\Response
   */
  public function show(Inventario $inventario)
  {
    return new InventarioResource($inventario);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Inventario  $inventario
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Inventario $inventario)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Inventario  $inventario
   * @return \Illuminate\Http\Response
   */
  public function destroy(Inventario $inventario)
  {
    $inventario->delete();
  }
}
