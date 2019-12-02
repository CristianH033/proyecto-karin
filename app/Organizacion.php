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
   * @Desc:  Obtener el tercero asociado a la enditad
   * @return \App\Tercero
   */
  public function tercero()
  {
    return $this->morphOne(Tercero::class, 'tercereable');
  }
}
