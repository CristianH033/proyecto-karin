<?php

namespace App\Http\Controllers;

use App\Tercero;
use Illuminate\Http\Request;
use App\Http\Resources\TerceroCollection;
use App\Http\Resources\Tercero as TerceroResource;

class TerceroController extends Controller
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
    return new TerceroCollection(Tercero::all());
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
   * @param  \App\Tercero  $tercero
   * @return \Illuminate\Http\Response
   */
  public function show(Tercero $tercero)
  {
    return new TerceroResource($tercero);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Tercero  $tercero
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Tercero $tercero)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Tercero  $tercero
   * @return \Illuminate\Http\Response
   */
  public function destroy(Tercero $tercero)
  {
    $tercero->delete();
  }
}
