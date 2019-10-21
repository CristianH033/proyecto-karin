<?php

namespace App;

use App\Estado;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pais extends Model
{
  use SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'paises';

  /**
   * Atributos que no son masivamente asignables.
   *
   * @var array
   */
  protected $guarded = [];

  /**
   * Convertir nombre a minusculas al guardar en la BD
   */
  public function setNombreAttribute($value)
  {
    $this->attributes['nombre'] = strtolower($value);
  }

  /* Relaciones */
  public function estados()
  {
    return $this->hasMany(Estado::class, 'pais_id', 'id');
  }
}
