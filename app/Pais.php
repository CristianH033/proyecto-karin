<?php

namespace App;

use App\Estado;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pais extends Model
{
  use LogsActivity, SoftDeletes;

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
   * Atributos que se guardan en el log de cambios.
   *
   * @var string
   */
  protected static $logAttributes = ['*'];

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
