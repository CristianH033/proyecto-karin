<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Lang;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResetPasswordMail extends Mailable implements ShouldQueue
{
  use Queueable, SerializesModels;

  /**
   * The password reset token.
   *
   * @var string
   */
  public $token;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($token, $emailAddress)
  {
    $this->token = $token;
    $this->emailAddress = $emailAddress;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
    $params = http_build_query([
      "token" => $this->token,
      "email" => $this->emailAddress
    ]);

    $spaURL = url(route('spa.password.reset')) . "?" . $params;

    return $this->markdown('emails.users.reset')
      ->subject(Lang::get('Reset Password Notification'))
      ->with([
        "actionUrl" => $spaURL
      ]);
  }
}
