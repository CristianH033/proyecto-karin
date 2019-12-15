<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Doctrine\Common\Inflector\Inflector;

class SpanishPluralizerServiceProvider extends ServiceProvider
{
  /**
   * Register services.
   *
   * @return void
   */
  public function register()
  {
    /**
     * Extender pluralización para palabras irregulares
     */
    Inflector::rules('plural', [
      'irregular' => [
        "organizacion" => "organizaciones",
        "proovedor" => "proovedores",
        "ubicacion" => "ubicaciones",
        "estacion" => "estaciones",
        "operador" => "operadores",
        "sucursal" => "sucursales",
        "entidad" => "entidades",
        "ciudad" => "ciudades",
        "legal" => "legales",
        "pais" => "paises"
      ]
    ]);
  }

  /**
   * Bootstrap services.
   *
   * @return void
   */
  public function boot()
  {
    //
  }
}
