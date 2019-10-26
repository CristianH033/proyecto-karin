<?php

namespace App\Traits\Auth;

use DB;
use Cookie;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

trait OauthProxy
{
  /**
   * @Author: Cristian David Home
   * @Date: 2019-10-25 20:21:22
   * @Desc: Envía una petición al servidor OAuth.
   * Grunts: password, refresh_token
   *
   * @param string $grantType el tipo de Grant que se solicita
   * @param array $data los datos que se envian al servidor
   */
  private function proxy(string $grantType, array $data = [])
  {
    // Obtener el ultimo cliente Oauth creado con el nombre proporcionado
    $client = DB::table('oauth_clients')
      ->where('name', config('services.oauth.clients.web.name'))
      ->orderBy('created_at', 'desc')
      ->first();

    // Crear array de datos
    $data = array_merge($data, [
      'client_id' => $client->id,
      'client_secret' => $client->secret,
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
      // Devolver el error response
      return $error->getResponse();
    }

    // Decodificar respuesta
    $oauthData = json_decode($response->getBody());

    // Crear cookie para el refresh token
    $refreshTokenCookie = Cookie::make(
      'refresh-token',
      $oauthData->refresh_token,
      config('services.oauth.expire.refresh_token'), // ENV
      null,
      null,
      false,
      true // HttpOnly
    );

    // Retornar respuesta con tokens
    return response()
      ->json([
        "token_type" => $oauthData->token_type,
        "expires_in" => $oauthData->expires_in,
        "access_token" => $oauthData->access_token
      ])
      ->withCookie($refreshTokenCookie);
  }
}
