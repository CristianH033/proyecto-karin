<?php

use App\Dispositivo;
use App\Incidencia;
use Illuminate\Database\Seeder;

class IncidenciasTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $dispositivo = Dispositivo::first();
    
    $incidencia = factory(Incidencia::class)->make([
      "estado_id" => 1,
      "solicitante_id" => 1,
      "responsable_id" => 1,
      "titulo" => "Nada sirve",
      "descripcion" => "Nada sirve"
    ]);

    $incidencia->incidenciable()->associate($dispositivo);
  }
}
