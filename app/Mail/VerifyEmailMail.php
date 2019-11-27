<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Lang;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class VerifyEmailMail extends Mailable implements ShouldQueue
{
  use Queueable, SerializesModels;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($verificationUrl)
  {
    $this->verificationUrl = $verificationUrl;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
    $params = http_build_query(["signedurl" => $this->verificationUrl]);
    $spaURL = route('spa.verification.verify') . "?" . $params;

    return $this->markdown('emails.users.verify')
      ->subject(Lang::get('Verify Email Address'))
      ->with([
        "verificationUrl" => $this->verificationUrl,
        "spaURL" => $spaURL
      ]);
  }
}
