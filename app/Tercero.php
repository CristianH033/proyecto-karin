<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tercero extends Model
{
  use SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'terceros';

  /**
   * Atributos que no son masivamente asignables.
   *
   * @var array
   */
  protected $guarded = [];
  public function scopePersonaJuridica($query)
  {
    return $query->where('tipo_tercero_id', '1');
  }

  public function scopePersonaNatural($query)
  {
    return $query->where('tipo_tercero_id', '2');
  }
}
