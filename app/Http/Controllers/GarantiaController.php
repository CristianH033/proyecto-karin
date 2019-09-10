<?php

namespace App\Http\Controllers;

use App\Garantia;
use Illuminate\Http\Request;
use App\Http\Resources\GarantiaCollection;
use App\Http\Resources\Garantia as GarantiaResource;

class GarantiaController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new GarantiaCollection(Garantia::all());
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
   * @param  \App\Garantia  $garantia
   * @return \Illuminate\Http\Response
   */
  public function show(Garantia $garantia)
  {
    return new GarantiaResource($garantia);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Garantia  $garantia
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Garantia $garantia)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Garantia  $garantia
   * @return \Illuminate\Http\Response
   */
  public function destroy(Garantia $garantia)
  {
    $garantia->delete();
  }
}
