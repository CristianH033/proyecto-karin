<?php

namespace App;

use App\Estado;
use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['nombre'];

  /**
   * Convertir nombre a minusculas al guardar en la BD
   */
  public function setNombreAttribute($value)
  {
    $this->attributes['nombre'] = strtolower($value);
  }

  /* Relaciones */
  public function estados()
  {
    return $this->hasMany(Estado::class, 'pais_id', 'id');
  }
}
