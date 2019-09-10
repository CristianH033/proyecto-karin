<?php

namespace App\Http\Controllers;

use App\TipoProducto;
use Illuminate\Http\Request;
use App\Http\Resources\TipoProductoCollection;
use App\Http\Resources\TipoProducto as TipoProductoResource;

class TipoProductoController extends Controller
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
   * @param  \App\TipoProducto  $tipoProducto
   * @return \Illuminate\Http\Response
   */
  public function show(TipoProducto $tipoProducto)
  {
    //
  }

    /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoProducto  $tipoProducto
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, TipoProducto $tipoProducto)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\TipoProducto  $tipoProducto
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoProducto $tipoProducto)
  {
    //
  }
}
