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
                "cliente" => "clientes",
                "contrato" => "contratos",
                "proovedor" => "proovedores",
                "producto" => "productos",
                "servicio" => "servicios",
                "tipo" => "tipos",
                "dispositivo" => "dispositivos",
                "modelo" => "modelos",
                "estacion" => "estaciones",
                "trabajo" => "trabajos",
                "sede" => "sedes",
                "funcionario" => "funcionarios",
                "ciudad" => "ciudades",
                "estado" => "estados",
                "pais" => "paises",
                "cargo" => "cargos",
                "personas" => "personas",
                "sucursal" => "sucursales",
                "operador" => "operadores",
                "incidencia" => "incidencias",
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
