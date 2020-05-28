<?php

namespace App\Http\Controllers;

use App\Fabricante;
use Illuminate\Http\Request;
use App\Http\Requests\FabricanteCreateRequest;
use App\Http\Requests\FabricanteUpdateRequest;
use App\Http\Resources\FabricanteResource;
use App\Http\Resources\FabricanteCollection;

class FabricanteController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    // $this->middleware('auth:api');
    // $this->middleware('verified');
    // $this->middleware('otp');
  }

  /**
   * Devuelve una colección de Fabricantes.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new FabricanteCollection(Fabricante::all());
  }

  /**
   * Guarda un Fabricante recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(FabricanteCreateRequest $request)
  {
    Fabricante::create($request->all());
  }

  /**
   * Muestra el Fabricante especificado.
   *
   * @param  \App\Fabricante $fabricante
   * @return \Illuminate\Http\Response
   */
  public function show(Fabricante $fabricante)
  {
    return new FabricanteResource($fabricante);
  }

  /**
   * Actualiza el Fabricante especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function update(
    FabricanteUpdateRequest $request,
    Fabricante $fabricante
  ) {
    $fabricante->save();
  }

  /**
   * Elimina el Fabricante especificado de la base de datos.
   *
   * @param  \App\Fabricante  $fabricante
   * @return \Illuminate\Http\Response
   */
  public function destroy(Fabricante $fabricante)
  {
    $fabricante->delete();
  }
}
