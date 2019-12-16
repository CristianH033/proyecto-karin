<?php

use App\Ubicacion;
use Illuminate\Database\Seeder;

class UbicacionesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Ubicacion::class)->create([
      "tipo_ubicacion_id" => 1,
      "sede_id" => 1,
      "ubicacion" => "Calle",
      "descripcion" => "En la calle"
    ]);
  }
}
