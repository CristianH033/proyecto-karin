<?php

namespace App;

use App\Estado;
use Illuminate\Database\Eloquent\Model;
class Ciudad extends Model
{
  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'ciudades';

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
  public function estado()
  {
    return $this->belongsTo(Estado::class, 'estado_id', 'id');
  }
}
