<?php

namespace App\Http\Controllers;

use App\Pais;
use Illuminate\Http\Request;
use App\Http\Resources\PaisCollection;
use App\Http\Resources\Pais as PaisResource;

class PaisController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new PaisCollection(Pais::all());
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
   * @param  \App\Pais  $pais
   * @return \Illuminate\Http\Response
   */
  public function show(Pais $pais)
  {
    return new PaisResource($pais);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Pais  $pais
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Pais $pais)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Pais  $pais
   * @return \Illuminate\Http\Response
   */
  public function destroy(Pais $pais)
  {
    $pais->delete();
  }
}
