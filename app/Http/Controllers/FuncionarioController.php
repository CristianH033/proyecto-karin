<?php

namespace App\Http\Controllers;

use App\Funcionario;
use Illuminate\Http\Request;
use App\Http\Resources\FuncionarioCollection;
use App\Http\Resources\Funcionario as FuncionarioResource;

class FuncionarioController extends Controller
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
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Funcionario  $funcionario
   * @return \Illuminate\Http\Response
   */
  public function show(Funcionario $funcionario)
  {
    //
  }

    /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Funcionario  $funcionario
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Funcionario $funcionario)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Funcionario  $funcionario
   * @return \Illuminate\Http\Response
   */
  public function destroy(Funcionario $funcionario)
  {
    //
  }
}
