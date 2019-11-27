<?php

namespace App;

use App\Pais;
use App\Ciudad;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Estado extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'estados';

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
  public function pais()
  {
    return $this->belongsTo(Pais::class, 'pais_id', 'id');
  }

  public function ciudades()
  {
    return $this->hasMany(Ciudad::class, 'estado_id', 'id');
  }
}
