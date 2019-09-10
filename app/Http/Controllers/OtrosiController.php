<?php

namespace App\Http\Controllers;

use App\Otrosi;
use Illuminate\Http\Request;
use App\Http\Resources\OtrosiCollection;
use App\Http\Resources\Otrosi as OtrosiResource;

class OtrosiController extends Controller
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
    return new OtrosiCollection(Otrosi::all());
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
   * @param  \App\Otrosi  $otrosi
   * @return \Illuminate\Http\Response
   */
  public function show(Otrosi $otrosi)
  {
    return new OtrosiResource($otrosi);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Otrosi  $otrosi
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Otrosi $otrosi)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Otrosi  $otrosi
   * @return \Illuminate\Http\Response
   */
  public function destroy(Otrosi $otrosi)
  {
    $otrosi->delete();
  }
}
