<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class Funcionario extends Model
{
  use LogsActivity, SoftDeletes;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'funcionarios';

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

  public function cargo()
  {
    return $this->belongsTo(Cargo::class, 'cargo_id', 'id');
  }

  public function ubicaciones()
  {
    return $this->belongsToMany(
      Ubicacion::class,
      'funcionario_ubicacion',
      'funcionario_id',
      'ubicacion_id'
    );
  }
}
