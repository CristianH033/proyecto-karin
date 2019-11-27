<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Notifications\VerifyEmailNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\ResetPasswordNotification;
use Silber\Bouncer\Database\HasRolesAndAbilities;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
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
  protected $fillable = ['email', 'password'];

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

  /**
   * Send the email verification notification.
   *
   * @return void
   */
  public function sendEmailVerificationNotification()
  {
    $this->notify(new VerifyEmailNotification());
  }

  /**
   * Send the password reset notification.
   *
   * @param  string  $token
   * @return void
   */
  public function sendPasswordResetNotification($token)
  {
    $this->notify(new ResetPasswordNotification($token));
  }
}
