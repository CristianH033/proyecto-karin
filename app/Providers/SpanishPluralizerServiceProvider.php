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
                "cargo" => "cargos",
                "ciudad" => "ciudades",
                "cliente" => "clientes",
                "contrato" => "contratos",
                "dispositivo" => "dispositivos",
                "entidad" => "entidades",
                "estacion" => "estaciones",
                "estado" => "estados",
                "funcionario" => "funcionarios",
                "incidencia" => "incidencias",
                "inventario" => "inventarios",
                "modelo" => "modelos",
                "operador" => "operadores",
                "pais" => "paises",
                "personas" => "personas",
                "producto" => "productos",
                "proovedor" => "proovedores",
                "sede" => "sedes",
                "servicio" => "servicios",
                "sucursal" => "sucursales",
                "tercero" => "terceros",
                "tipo" => "tipos",
                "trabajo" => "trabajos",
                "representante" => "representantes",
                "legal" => "legales",
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
