<?php

use App\Ciudad;
use App\Estado;
use Illuminate\Database\Seeder;

class CiudadesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Estado::all()->each(function ($pais) {
      $pais->ciudades()->saveMany(factory(Ciudad::class, 20)->make());
    });
  }
}
