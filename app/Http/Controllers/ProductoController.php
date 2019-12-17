<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;
use App\Http\Resources\ProductoResource;
use App\Http\Resources\ProductoCollection;

class ProductoController extends Controller
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
   * Devuelve una colección de Productos.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new ProductoCollection(Producto::all());
  }

  /**
   * Guarda un Producto recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    Producto::create($request->all());
  }

  /**
   * Muestra el Producto especificado.
   *
   * @param  \App\Producto $producto
   * @return \Illuminate\Http\Response
   */
  public function show(Producto $producto)
  {
    return new ProductoResource($producto);
  }

  /**
   * Actualiza el Producto especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Producto  $producto
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Producto $producto)
  {
    $producto->save();
  }

  /**
   * Elimina el Producto especificado de la base de datos.
   *
   * @param  \App\Producto  $producto
   * @return \Illuminate\Http\Response
   */
  public function destroy(Producto $producto)
  {
    $producto->delete();
  }
}
