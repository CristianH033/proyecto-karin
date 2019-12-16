<?php

use App\Dispositivo;
use Illuminate\Database\Seeder;

class DispositivosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Dispositivo::class)->create([
      "tipo_dispositivo_id" => 1,
      "modelo_id" => 1,
      "ubicacion_id" => 1,
      "serial" => "SGX1134456",
      "caracteristicas_tecnicas" => json_encode(["procesador" => "i5"])
    ]);
  }
}
