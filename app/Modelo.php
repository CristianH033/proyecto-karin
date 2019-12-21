<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Modelo extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'modelos';

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

  protected $casts = [];

  public function getCaracteristicasTecnicasAttribute($value)
  {
    return json_decode($value, false);
  }

  /** Relaciones */

  public function fabricante()
  {
    return $this->belongsTo(Fabricante::class, 'fabricante_id', 'id');
  }

  public function dispositivos()
  {
    return $this->hasMany(Dispositivo::class, 'modelo_id', 'id');
  }

  public function componentes()
  {
    return $this->hasMany(Dispositivo::class, 'modelo_id', 'id');
  }
}
