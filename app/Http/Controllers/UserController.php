<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
  /**
   * Constructor de la nueva instancia del controlador
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth:api');
    $this->middleware('can:view-users')->only(['index', 'show']);
    $this->middleware('create-users')->only('store');
    $this->middleware('update-users')->only('update');
    $this->middleware('delete-users')->only('destroy');
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request, User $usuarios)
  {
    $usuarios = $usuarios->newQuery();

    // Filtrar por nombre o correo
    if ($request->has("filter")) {
      $filtro =  mb_strtolower($request->input('filter'));
      $usuarios
        ->with('persona')
        ->where('email', 'LIKE', "%{$filtro}%")
        ->orWhereHas('persona', function ($q) use ($filtro){
          $q->where('primer_nombre', 'LIKE', "%{$filtro}%");
        })
        ->get();
    }

    return new UserCollection($usuarios->paginate(10));
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
   * @param  \App\User  $user
   * @return \Illuminate\Http\Response
   */
  public function show(User $user)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\User  $user
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, User $user)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\User  $user
   * @return \Illuminate\Http\Response
   */
  public function destroy(User $user)
  {
    //
  }
}
