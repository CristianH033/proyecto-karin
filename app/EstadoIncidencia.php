<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EstadoIncidencia extends Model
{
  public function incidencias()
  {
    return $this->hasMany(Incidencia::class, 'estado_incidencia_id', 'id');
  }
}
