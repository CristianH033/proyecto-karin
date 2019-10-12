<?php

namespace App\Traits\Auth;

use DB;
use Cookie;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\RequestException;

trait OauthProxy
{
  /**
   * Envía una petición al servidor de OAuth.
   *
   * @param string $grantType el tipo de Grant que se solicita
   * @param array $data los datos que se envian al servidor
   */
  public function proxy(String $grantType, array $data = [])
  {
    $data = array_merge($data, [
      'client_id' => config('services.oauth.client.id'),
      'client_secret' => config('services.oauth.client.secret'),
      'grant_type' => $grantType
    ]);

    // Cliente GuzzleHttp\Client
    $http = new Client();
    // Hacer petición al servidor OAuth
    try {
      $response = $http->post(config('services.oauth.endpoint'), [
        'headers' => [
          'Accept' => 'application/json',
          'Content-Type' => 'application/json'
        ],
        'json' => $data
      ]);
    } catch (RequestException $error) {
      return $error->getResponse();
    }

    $data = json_decode($response->getBody());
    // Create a refresh token cookie
    $refreshTokenCookie = Cookie::make(
      'refresh-token',
      $data->refresh_token,
      60 * 24 * 30, // 10 días
      null,
      null,
      false,
      true // HttpOnly
    );

    return response()->json([
      "token_type" => $data->token_type,
      "expires_in" => $data->expires_in,
      "access_token" => $data->access_token
    ])->withCookie($refreshTokenCookie);
  }

  /**
   * Enviar petición a servidor Oauth.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  protected function sendLoginResponse(Request $request)
  {
    // Cliente GuzzleHttp\Client
    $http = new Client();
    // Hacer petición al servidor OAuth
    try {
      $response = $http->post(config('services.oauth.endpoint'), [
        'headers' => [
          'Accept' => 'application/json',
          'Content-Type' => 'application/json'
        ],
        'json' => [
          'grant_type' => 'password',
          'client_id' => config('services.oauth.client.id'),
          'client_secret' => config('services.oauth.client.secret'),
          'username' => $request->email,
          'password' => $request->password,
          'scope' => ''
        ]
      ]);
    } catch (RequestException $error) {
      return $error->getResponse();
    }
    // Limpiar intentos de login
    $this->clearLoginAttempts($request);

    $decodedResponse = json_decode((string) $response->getBody(), true);

    // Crear cookie httponly para almacenar el valor del refresh-token
    $refreshTokenCookie = Cookie::make(
      'refresh-token',
      $decodedResponse["refresh_token"],
      60 * 24 * 30 // 30 días
    );

    return response()
      ->json([
        "token_type" => $decodedResponse["token_type"],
        "expires_in" => $decodedResponse["expires_in"],
        "access_token" => $decodedResponse["access_token"]
      ])
      ->withCookie($refreshTokenCookie);
  }
}
