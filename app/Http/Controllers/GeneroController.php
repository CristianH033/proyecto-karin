<?php

namespace App\Http\Controllers;

use App\Genero;
use Illuminate\Http\Request;
use App\Http\Requests\GeneroCreateRequest;
use App\Http\Requests\GeneroUpdateRequest;
use App\Http\Resources\GeneroResource;
use App\Http\Resources\GeneroCollection;

class GeneroController extends Controller
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
  public function store(GeneroCreateRequest $request)
  {
    Genero::create($request->all());
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Genero $genero
   * @return \Illuminate\Http\Response
   */
  public function show(Genero $genero)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Genero  $genero
   * @return \Illuminate\Http\Response
   */
  public function update(GeneroUpdateRequest $request, Genero $genero)
  {
    $genero->save();
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Genero  $genero
   * @return \Illuminate\Http\Response
   */
  public function destroy(Genero $genero)
  {
    $genero->delete();
  }
}
