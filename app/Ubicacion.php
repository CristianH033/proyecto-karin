<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ubicacion extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'ubicaciones';

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
  public function tipoUbicacion()
  {
    return $this->belongsTo(TipoUbicacion::class, 'tipo_ubicacion_id', 'id');
  }

  public function sede()
  {
    return $this->belongsTo(Sede::class, 'sede_id', 'id');
  }

  public function componentes()
  {
    return $this->hasMany(Componente::class, 'ubicacion_id', 'id');
  }

  public function dispositivos()
  {
    return $this->hasMany(Dispositivo::class, 'ubicacion_id', 'id');
  }
}
