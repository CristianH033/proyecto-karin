<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sede extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'sedes';

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

  /** Relaciones */

  public function organizacion()
  {
    return $this->belongsTo(Organizacion::class, 'organizacion_id', 'id');
  }

  public function ciudad()
  {
    return $this->belongsTo(Ciudad::class, 'ciudad_id', 'id');
  }
}
