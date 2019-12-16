<?php

use App\EstadoIncidencia;
use Illuminate\Database\Seeder;

class EstadoIncidenciasTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(EstadoIncidencia::class)->create([
      "estado" => "abierto"
    ]);
  }
}
