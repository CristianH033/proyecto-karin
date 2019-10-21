<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Silber\Bouncer\Database\HasRolesAndAbilities;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Activitylog\Traits\LogsActivity;

class User extends Authenticatable
{
  use HasApiTokens, Notifiable, HasRolesAndAbilities, SoftDeletes, LogsActivity;

  /**
   * La tabla asociada al modelo.
   *
   * @var string
   */
  protected $table = 'users';

  /**
   * Atributos masivamente asignables.
   *
   * @var array
   */
  protected $fillable = ['name', 'email', 'password'];

  /**
   * Atributos que deben ser ocultos de los arrays.
   *
   * @var array
   */
  protected $hidden = ['password', 'remember_token'];

  /**
   * Atributos que deben ser casteados a tipos nativos.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime'
  ];

  /**
   * Atributos que se guardan en el log de cambios.
   *
   * @var string
   */
  protected static $logAttributes = ['*'];
}
