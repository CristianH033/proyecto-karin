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
                'pais' => 'paises',
                'ciudad' => 'ciudades',
                'sucursal' => 'sucursales',
                'proveedor' => 'proveedores',
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
