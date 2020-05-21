<?php

namespace App\Http\Controllers;

use App\TipoProducto;
use Illuminate\Http\Request;
use App\Http\Requests\TipoProductoCreateRequest;
use App\Http\Requests\TipoProductoUpdateRequest;
use App\Http\Resources\TipoProductoResource;
use App\Http\Resources\TipoProductoCollection;

class TipoProductoController extends Controller
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
   * Devuelve una colección de Tipos de Producto.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TipoProductoCollection(TipoProducto::all());
  }

  /**
   * Guarda un Tipo de Producto recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(TipoProductoCreateRequest $request)
  {
    TipoProducto::create($request->all());
  }

  /**
   * Muestra el Tipo de Producto especificado.
   *
   * @param  \App\TipoProducto $tipoProducto
   * @return \Illuminate\Http\Response
   */
  public function show(TipoProducto $tipoProducto)
  {
    return new TipoProductoResource($tipoProducto);
  }

  /**
   * Actualiza el Tipo de Producto especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\TipoProducto  $tipoProducto
   * @return \Illuminate\Http\Response
   */
  public function update(TipoProductoUpdateRequest $request, TipoProducto $tipoProducto)
  {
    $tipoProducto->save();
  }

  /**
   * Elimina el Tipo de Producto especificado de la base de datos.
   *
   * @param  \App\TipoProducto  $tipoProducto
   * @return \Illuminate\Http\Response
   */
  public function destroy(TipoProducto $tipoProducto)
  {
    $tipoProducto->delete();
  }
}
