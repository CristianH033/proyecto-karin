<?php

namespace App\Http\Controllers;

use App\Dispositivo;
use Illuminate\Http\Request;
use App\Http\Resources\DispositivoCollection;
use App\Http\Resources\Dispositivo as DispositivoResource;

class DispositivoController extends Controller
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
    return new DispositivoCollection(Dispositivo::all());
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
   * @param  \App\Dispositivo  $dispositivo
   * @return \Illuminate\Http\Response
   */
  public function show(Dispositivo $dispositivo)
  {
    return new DispositivoResource($dispositivo);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Dispositivo  $dispositivo
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Dispositivo $dispositivo)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Dispositivo  $dispositivo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Dispositivo $dispositivo)
  {
    $dispositivo->delete();
  }
}
