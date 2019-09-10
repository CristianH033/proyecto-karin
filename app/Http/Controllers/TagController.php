<?php

namespace App\Http\Controllers;

use App\Tag;
use Illuminate\Http\Request;
use App\Http\Resources\TagCollection;
use App\Http\Resources\Tag as TagResource;

class TagController extends Controller
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
   * Devuelve una colección de Tags.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return new TagCollection(Tag::all());
  }

  /**
   * Guarda un Tag recién creado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Muestra el Tag especificado.
   *
   * @param  \App\Tag  $tag
   * @return \Illuminate\Http\Response
   */
  public function show(Tag $tag)
  {
    return new TagResource($tag);
  }

  /**
   * Actualiza el Tag especificado en la base de datos.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Tag  $tag
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Tag $tag)
  {
    //
  }

  /**
   * Elimina el Tag especificado de la base de datos.
   *
   * @param  \App\Tag  $tag
   * @return \Illuminate\Http\Response
   */
  public function destroy(Tag $tag)
  {
    $tag->delete();
  }
}
