<?php

namespace App;

use App\Estado;
use Illuminate\Database\Eloquent\Model;
class Ciudad extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['nombre', 'estado_id'];

  /**
   * Convertir nombre a minusculas al guardar en la BD
   */
  public function setNombreAttribute($value)
  {
    $this->attributes['nombre'] = strtolower($value);
  }

  /* Relaciones */
  public function estado()
  {
    return $this->belongsTo(Estado::class, 'estado_id', 'id');
  }
}
