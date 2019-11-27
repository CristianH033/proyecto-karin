@component('mail::message')
# @lang('Access code.')

@lang('This is your login code.')

<table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td align="center">
      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td>
                  <h1>{{$OTP}}</h1>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

@php
$time = config('services.2fa.otp.lifetime');
$hours = intdiv($time, 60);
$minutes = ($time % 60);
@endphp
@lang('This code will be valid to log in for :hours and :minutes minutes.', [
"hours" => $hours,
"minutes" => $minutes
])<br>

@lang('Regards'),<br>
{{ config('app.name') }}
@endcomponent
