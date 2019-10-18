<?php

namespace App;

use App\Pais;
use App\Ciudad;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
  public function pais()
  {
    return $this->belongsTo(Pais::class, 'pais_id', 'id');
  }

  public function ciudades()
  {
    return $this->hasMany(Ciudad::class, 'estado_id', 'id');
  }
}
