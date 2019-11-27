<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tercero extends Model
{
  use LogsActivity, SoftDeletes;

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

  /**
   * Atributos que se guardan en el log de cambios.
   *
   * @var string
   */
  protected static $logAttributes = ['*'];

  /** Query Scopes */
  public function scopePersonaJuridica($query)
  {
    return $query->where('tipo_tercero_id', '1');
  }

  public function scopePersonaNatural($query)
  {
    return $query->where('tipo_tercero_id', '2');
  }

  /**
   * @Author: Cristian David Home
   * @Date: 2019-10-28 09:52:51
   * @Desc:  Obtener el tercero asociado a la enditad
   * @return Illuminate\Database\Eloquent\Model
   */
  public function tercereable()
  {
    return $this->morphTo();
  }
}
