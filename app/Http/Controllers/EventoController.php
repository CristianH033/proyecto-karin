<?php

namespace App\Http\Controllers;

use App\Evento;
use Illuminate\Http\Request;
use App\Http\Requests\EventoCreateRequest;
use App\Http\Requests\EventoUpdateRequest;
use App\Http\Resources\EventoResource;
use App\Http\Resources\EventoCollection;

class EventoController extends Controller
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
  public function store(EventoCreateRequest $request)
  {
    Evento::create($request->all());
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Evento $evento
   * @return \Illuminate\Http\Response
   */
  public function show(Evento $evento)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Evento  $evento
   * @return \Illuminate\Http\Response
   */
  public function update(EventoUpdateRequest $request, Evento $evento)
  {
    $evento->save();
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Evento  $evento
   * @return \Illuminate\Http\Response
   */
  public function destroy(Evento $evento)
  {
    $evento->delete();
  }
}
