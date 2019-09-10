<?php

namespace App\Http\Controllers;

use App\Cargo;
use Illuminate\Http\Request;
use App\Http\Resources\CargoCollection;
use App\Http\Resources\Cargo as CargoResource;

class CargoController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    // $this->middleware('auth');
  }

  /**
   * Devuelve una colección de Cargos.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new CargoCollection(Cargo::all());
  }

  /**
   * Guarda un Cargo recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Cargo especificado.
   *
   * @param  \App\Cargo  $cargo
   * @return \Illuminate\Http\Response
   */
  public function show(Cargo $cargo)
  {
    return new CargoResource($cargo);
  }

  /**
   * Actualiza el Cargo especificado en la base de datos.
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
   * Elimina el Cargo especificado de la base de datos.
   *
   * @param  \App\Cargo  $cargo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Cargo $cargo)
  {
    $cargo->delete();
  }
}
