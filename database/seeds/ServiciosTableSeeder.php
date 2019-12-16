<?php

use App\Servicio;
use Illuminate\Database\Seeder;

class ServiciosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Servicio::class)->create([
      "tipo_servicio_id" => 1,
      "nombre" => "software contable",
      "descripcion" => "lorem ipsum dolor"
    ]);
  }
}
