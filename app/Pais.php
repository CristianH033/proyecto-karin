<?php

namespace App;

use App\Estado;
use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
  public function estados()
  {
    return $this->hasMany(Estado::class, 'pais_id', 'id');
  }
}
