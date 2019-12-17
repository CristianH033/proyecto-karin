<?php

namespace App;

use App\Tercero;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Organizacion extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * @Author: Cristian David Home
   * @Date: 2019-10-28 09:52:51
   * @Desc:  Obtener el representante legal (persona)
   * @return \App\Tercero
   */
  public function representante()
  {
    return $this->belongsTo(Persona::class, 'representante_id', 'id');
  }

  public function sedes()
  {
    return $this->hasMany(Sede::class, 'organizacion_id', 'id');
  }
}
