<?php

namespace App;

use App\Pais;
use App\Ciudad;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['nombre', 'pais_id'];

  /**
   * Convertir nombre a minusculas al guardar en la BD
   */
  public function setNombreAttribute($value)
  {
    $this->attributes['nombre'] = strtolower($value);
  }

  /* Relaciones */
  public function pais()
  {
    return $this->belongsTo(Pais::class, 'pais_id', 'id');
  }

  public function ciudades()
  {
    return $this->hasMany(Ciudad::class, 'estado_id', 'id');
  }
}
