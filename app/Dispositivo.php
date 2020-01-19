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

  protected $casts = [];

  /**
   * The accessors to append to the model's array form.
   *
   * @var array
   */
  protected $appends = ['modelo'];

  /**
   * Obtener serial.
   *
   * @param  string  $value
   * @return string
   */
  public function getSerialAttribute($value)
  {
    return mb_strtoupper($value);
  }

  /**
   * Establecer serial.
   *
   * @param  string  $value
   * @return void
   */
  public function setSerialAttribute($value)
  {
    $this->attributes['serial'] = strtolower($value);
  }

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
    // Obtener caracteristicas de modelo
    $modeloCT = $this->modelo()->getResults()->caracteristicas_tecnicas;
    // Convertir objeto de ct modelo a array
    $specsModel = (array) $modeloCT;
    // Decodificar campo json de dispositivo
    $specsDisp = json_decode($value, true);
    // Crear json de datos combinado
    $specs = json_encode(array_merge($specsModel, $specsDisp));
    // Convertir json a un objeto php
    return json_decode($specs, false);
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
