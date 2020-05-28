<?php

namespace App\Http\Controllers;

use App\Inventario;
use Illuminate\Http\Request;
use App\Http\Requests\InventarioCreateRequest;
use App\Http\Requests\InventarioUpdateRequest;
use App\Http\Resources\InventarioResource;
use App\Http\Resources\InventarioCollection;

class InventarioController extends Controller
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
   * Devuelve una colección de Inventarios.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new InventarioCollection(Inventario::all());
  }

  /**
   * Guarda un Inventario recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(InventarioCreateRequest $request)
  {
    Inventario::create($request->all());
  }

  /**
   * Muestra el Inventario especificado.
   *
   * @param  \App\Inventario $inventario
   * @return \Illuminate\Http\Response
   */
  public function show(Inventario $inventario)
  {
    return new InventarioResource($inventario);
  }

  /**
   * Actualiza el Inventario especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Inventario  $inventario
   * @return \Illuminate\Http\Response
   */
  public function update(
    InventarioUpdateRequest $request,
    Inventario $inventario
  ) {
    $inventario->save();
  }

  /**
   * Elimina el Inventario especificado de la base de datos.
   *
   * @param  \App\Inventario  $inventario
   * @return \Illuminate\Http\Response
   */
  public function destroy(Inventario $inventario)
  {
    $inventario->delete();
  }
}
