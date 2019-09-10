<?php

namespace App\Http\Controllers;

use App\Servicio;
use Illuminate\Http\Request;
use App\Http\Resources\ServicioCollection;
use App\Http\Resources\Servicio as ServicioResource;

class ServicioController extends Controller
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
   * @param  \App\Servicio  $servicio
   * @return \Illuminate\Http\Response
   */
  public function show(Servicio $servicio)
  {
    //
  }

    /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Servicio  $servicio
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Servicio $servicio)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Servicio  $servicio
   * @return \Illuminate\Http\Response
   */
  public function destroy(Servicio $servicio)
  {
    //
  }
}
