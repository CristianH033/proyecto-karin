<?php

namespace App\Http\Controllers;

use App\Sede;
use Illuminate\Http\Request;
use App\Http\Resources\SedeCollection;
use App\Http\Resources\Sede as SedeResource;

class SedeController extends Controller
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
   * @param  \App\Sede  $sede
   * @return \Illuminate\Http\Response
   */
  public function show(Sede $sede)
  {
    //
  }

    /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Sede  $sede
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Sede $sede)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Sede  $sede
   * @return \Illuminate\Http\Response
   */
  public function destroy(Sede $sede)
  {
    //
  }
}
