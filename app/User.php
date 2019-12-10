<?php

namespace App;

use App\Persona;
use Laravel\Scout\Searchable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Cache;
use App\Notifications\OTPNotification;
use Illuminate\Support\Facades\Config;
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
  use HasApiTokens,
    Notifiable,
    HasRolesAndAbilities,
    SoftDeletes,
    LogsActivity,
    Searchable;

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
  protected $fillable = ['persona_id', 'email', 'password'];

  /**
   * Atributos que deben ser ocultos de los arrays.
   *
   * @var array
   */
  protected $hidden = ['persona_id', 'password', 'remember_token'];

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
   * The accessors to append to the model's array form.
   *
   * @var array
   */
  protected $appends = ['nombre', 'dni'];

  /**
   * Obtener nombre de persona.
   *
   * @return string
   */
  public function getNombreAttribute()
  {
    return $this->persona()
      ->getResults()
      ->fullName();
  }

  /**
   * Obtener DNI de persona.
   *
   * @return string
   */
  public function getDniAttribute()
  {
    return $this->persona()->getResults()->dni;
  }

  public $asYouType = true;

  /**
   * Get the indexable data array for the model.
   *
   * @return array
   */
  public function toSearchableArray()
  {
    $array = $this->toArray();

    $array = array_merge($array, ['persona' => $this->persona]);
    return $array;
  }

  /** Scopes */

  public function scopeBuscarPorEmail($query, $search)
  {
    if ($search == null) {
      return $query;
    }

    return $query->where('email', 'LIKE', "%{$search}%");
  }

  /**
   * Persona relacionada al usuario
   * @return \App\Persona
   */
  public function persona()
  {
    return $this->belongsTo(Persona::class, 'persona_id', 'id');
  }

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

  /**
   * Obtener el actual código OTP
   * @return String
   */
  public function OTP()
  {
    return Cache::get($this->OTPKey());
  }

  /**
   * Validar si existe un código OTP vigente
   * @return Boolean
   */
  public function ongoingOTP()
  {
    return Cache::has($this->OTPKey());
  }

  /**
   * Validar si el OTP ya fue verificado
   * @return Boolean
   */
  public function OTPVerified()
  {
    return Cache::get($this->OTPVerifiedKey());
  }

  /**
   * Establecer estado de OTP
   * @param  Boolean  $val
   */
  public function SetOTPVerified(bool $val)
  {
    Cache::Put(
      [
        $this->OTPVerifiedKey() => $val
      ],
      Cache::get('time')
    );
  }

  /**
   * Obtener llave de chache OTP
   * @return String
   */
  public function OTPKey()
  {
    return "OTP_{$this->id}";
  }

  /**
   * Obtener llave de chache OTP Verified
   * @return String
   */
  public function OTPVerifiedKey()
  {
    return "OTP_verified_{$this->id}";
  }

  /**
   * Obtener llave de chache OTP Time
   * @return String
   */
  public function OTPTimeKey()
  {
    return "OTP_time_{$this->id}";
  }

  /**
   * Generar y guardar en cache un nuevo código OTP
   * @return String
   */
  public function cacheNewOTP()
  {
    $OTP = rand(100000, 999999);
    $expiration = now()->addMinutes(
      Config::get('services.2fa.otp.lifetime', 60)
    );
    Cache::put(
      [
        $this->OTPKey() => $OTP,
        $this->OTPVerifiedKey() => false,
        $this->OTPTimeKey() => $expiration
      ],
      $expiration
    );
    return $OTP;
  }

  /**
   * Enviar notificación de código OTP
   */
  public function sendOTP()
  {
    $OTP = $this->cacheNewOTP();
    $this->notify(new OTPNotification($OTP));
  }
}
