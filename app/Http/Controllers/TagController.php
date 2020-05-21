<?php

namespace App\Http\Controllers;

use App\Tag;
use Illuminate\Http\Request;
use App\Http\Requests\TagCreateRequest;
use App\Http\Requests\TagUpdateRequest;
use App\Http\Resources\TagResource;
use App\Http\Resources\TagCollection;

class TagController extends Controller
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
  public function store(TagCreateRequest $request)
  {
    Tag::create($request->all());
  }

  /**
   * Muestra el Tag especificado.
   *
   * @param  \App\Tag $tag
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
  public function update(TagUpdateRequest $request, Tag $tag)
  {
    $tag->save();
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
