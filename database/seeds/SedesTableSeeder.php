<?php

use App\Sede;
use Illuminate\Database\Seeder;

class SedesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Sede::class)->create([
      "organizacion_id" => 1,
      "ciudad_id" => 1,
      "nombre" => "Sede X",
      "direccion" => "Carrera 34 # 13-24",
    ]);
  }
}
