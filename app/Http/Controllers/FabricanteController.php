<?php

namespace App\Http\Controllers;

use App\Fabricante;
use Illuminate\Http\Request;
use App\Http\Resources\FabricanteCollection;
use App\Http\Resources\Fabricante as FabricanteResource;

class FabricanteController extends Controller
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
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function show(Fabricante $fabricante)
  {
    //
  }

    /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Fabricante $fabricante)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function destroy(Fabricante $fabricante)
  {
    //
  }
}
