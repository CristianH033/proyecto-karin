<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Persona extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'personas';

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

  public function user()
  {
    return $this->hasOne(User::class, 'persona_id', 'id');
  }

  /**
   * @Author: Cristian David Home
   * @Date: 2019-10-28 09:52:51
   * @Desc:  Obtener el tercero asociado a la enditad
   * @return \App\Tercero
   */
  public function tercero()
  {
    return $this->morphOne(Tercero::class, 'tercereable');
  }
}
