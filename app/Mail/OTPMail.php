<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Lang;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OTPMail extends Mailable implements ShouldQueue
{
  use Queueable, SerializesModels;

  public $OTP;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($OTP)
  {
    $this->OTP = $OTP;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
    return $this->markdown('emails.users.otp')->subject(
      Lang::get('Access code.')
    );
  }
}
