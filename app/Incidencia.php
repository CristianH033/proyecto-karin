<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Incidencia extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'incidencias';

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

  /**
   * Obtener el modelo contratable.
   */
  public function incidenciable()
  {
    return $this->morphTo();
  }

  public function estado()
  {
    return $this->belongsTo(
      EstadoIncidencia::class,
      'estado_incidencia_id',
      'id'
    );
  }
}
