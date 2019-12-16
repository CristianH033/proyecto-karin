<?php

use App\Modelo;
use Illuminate\Database\Seeder;

class ModelosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Modelo::class)->create([
      "nombre" => "inspiron 9438",
      "caracteristicas_tecnicas" => json_encode(["procesador" => "i7"])
    ]);
  }
}
