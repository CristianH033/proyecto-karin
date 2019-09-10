<?php

namespace App\Http\Controllers;

use App\Ciudad;
use Illuminate\Http\Request;
use App\Http\Resources\CiudadCollection;
use App\Http\Resources\Ciudad as CiudadResource;

class CiudadController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new CiudadCollection(Ciudad::all());
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
   * @param  \App\Ciudad  $ciudad
   * @return \Illuminate\Http\Response
   */
  public function show(Ciudad $ciudad)
  {
    return new CiudadResource($ciudad);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Ciudad  $ciudad
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Ciudad $ciudad)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Ciudad  $ciudad
   * @return \Illuminate\Http\Response
   */
  public function destroy(Ciudad $ciudad)
  {
    $ciudad->delete();
  }
}
