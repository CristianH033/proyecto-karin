<?php

namespace App\Http\Controllers;

use App\EstacionTrabajo;
use Illuminate\Http\Request;
use App\Http\Resources\EstacionTrabajoCollection;
use App\Http\Resources\EstacionTrabajo as EstacionTrabajoResource;

class EstacionTrabajoController extends Controller
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
   * @param  \App\EstacionTrabajo  $estacionTrabajo
   * @return \Illuminate\Http\Response
   */
  public function show(EstacionTrabajo $estacionTrabajo)
  {
    //
  }

    /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\EstacionTrabajo  $estacionTrabajo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, EstacionTrabajo $estacionTrabajo)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\EstacionTrabajo  $estacionTrabajo
   * @return \Illuminate\Http\Response
   */
  public function destroy(EstacionTrabajo $estacionTrabajo)
  {
    //
  }
}
