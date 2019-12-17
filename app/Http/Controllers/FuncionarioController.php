<?php

namespace App\Http\Controllers;

use App\Funcionario;
use Illuminate\Http\Request;
use App\Http\Resources\FuncionarioResource;
use App\Http\Resources\FuncionarioCollection;

class FuncionarioController extends Controller
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
   * Devuelve una colección de Funcionarios.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new FuncionarioCollection(Funcionario::all());
  }

  /**
   * Guarda un Funcionario recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    Funcionario::create($request->all());
  }

  /**
   * Muestra el Funcionario especificado.
   *
   * @param  \App\Funcionario $funcionario
   * @return \Illuminate\Http\Response
   */
  public function show(Funcionario $funcionario)
  {
    return new FuncionarioResource($funcionario);
  }

  /**
   * Actualiza el Funcionario especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Funcionario  $funcionario
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Funcionario $funcionario)
  {
    $funcionario->save();
  }

  /**
   * Elimina el Funcionario especificado de la base de datos.
   *
   * @param  \App\Funcionario  $funcionario
   * @return \Illuminate\Http\Response
   */
  public function destroy(Funcionario $funcionario)
  {
    $funcionario->delete();
  }
}
