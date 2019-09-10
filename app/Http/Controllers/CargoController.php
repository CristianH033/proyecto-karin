<?php

namespace App\Http\Controllers;

use App\Cargo;
use Illuminate\Http\Request;
use App\Http\Resources\CargoCollection;
use App\Http\Resources\Cargo as CargoResource;

class CargoController extends Controller
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
    return new CargoCollection(Cargo::all());
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
   * @param  \App\Cargo  $cargo
   * @return \Illuminate\Http\Response
   */
  public function show(Cargo $cargo)
  {
    return new CargoResource($cargo);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Cargo  $cargo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Cargo $cargo)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Cargo  $cargo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Cargo $cargo)
  {
    $cargo->delete();
  }
}
