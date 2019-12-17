<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Dispositivo extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'dispositivos';

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

  protected $casts = [
    "caracteristicas_tecnicas" => "object"
  ];

  /**
   * The accessors to append to the model's array form.
   *
   * @var array
   */
  protected $appends = ['modelo'];

  /**
   * Obtener modelo.
   *
   * @return string
   */
  public function getModeloAttribute()
  {
    return $this->modelo()->getResults()->nombre;
  }

  public function getCaracteristicasTecnicasAttribute($value)
  {
    $modeloCT = $this->modelo()->getResults()->caracteristicas_tecnicas;
    $modeloCT = json_decode($modeloCT, true);
    $value = json_decode(json_decode($value), true);
    return json_decode(json_encode(array_merge($modeloCT, $value)), false);
  }

  /** Relaciones */

  public function modelo()
  {
    return $this->belongsTo(Modelo::class, 'modelo_id', 'id');
  }

  public function ubicacion()
  {
    return $this->belongsTo(Ubicacion::class, 'ubicacion_id', 'id');
  }

  public function componentes()
  {
    return $this->hasMany(Componente::class, 'dispositivo_id', 'id');
  }

  /**
   * Obtener todos los contratos relacionados.
   */
  public function incidencias()
  {
    return $this->morphMany(Incidencia::class, 'incidenciable');
  }

  public function garantias()
  {
    return $this->morphMany(Garantia::class, 'garantizable');
  }
}
