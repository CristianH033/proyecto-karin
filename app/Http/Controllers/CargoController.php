<?php

namespace App\Http\Controllers;

use App\Cargo;
use Illuminate\Http\Request;
use App\Http\Resources\CargoResource;
use App\Http\Resources\CargoCollection;

class CargoController extends Controller
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
    $request->validate([
      'nombre' => 'bail|required|iunique:cargos|max:255',
      'descripcion' => 'min:5'
    ]);

    Cargo::create([
      "nombre" => $request->nombre,
      "descripcion" => $request->descripcion,
    ]);
  }

  /**
   * Muestra el Cargo especificado.
   *
   * @param  \App\Cargo $cargo
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
    $cargo->save();
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
