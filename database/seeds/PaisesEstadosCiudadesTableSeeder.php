<?php

use App\Pais;
use App\Estado;
use App\Ciudad;
use Illuminate\Database\Seeder;

class PaisesEstadosCiudadesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Pais::class, 5)
      ->create()
      ->each(function ($pais) {
        $pais->estados()->saveMany(factory(Estado::class, 10)->make());
      });

      Estado::all()->each(function($estado){
        $estado->ciudades()->saveMany(factory(Ciudad::class, 10)->make());
      });
  }
}
