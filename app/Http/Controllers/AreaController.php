<?php

namespace App\Http\Controllers;

use App\Area;
use Illuminate\Http\Request;
use App\Http\Resources\AreaResource;
use App\Http\Resources\AreaCollection;

class AreaController extends Controller
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
   * Devuelve una colección de Areas.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new AreaCollection(Area::all());
  }

  /**
   * Guarda un Area recién creada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    Area::create($request->all());
  }

  /**
   * Muestra el Area especificada.
   *
   * @param  \App\Area $area
   * @return \Illuminate\Http\Response
   */
  public function show(Area $area)
  {
    return new AreaResource($area);
  }

  /**
   * Actualiza el Area especificada en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Area  $area
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Area $area)
  {
    $area->save();
  }

  /**
   * Elimina el Area especificada de la base de datos.
   *
   * @param  \App\Area  $area
   * @return \Illuminate\Http\Response
   */
  public function destroy(Area $area)
  {
    $area->delete();
  }
}
