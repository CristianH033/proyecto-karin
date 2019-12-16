<?php

use App\Inicidencia;
use Illuminate\Database\Seeder;

class InicidenciasTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Inicidencia::class)->create([
      "estado_id" => 1,
      "solicitante_id" => 1,
      "responsable_id" => 1,
      "item_incidenciable" => 1,
      "titulo" => "Nada sirve",
      "descripcion" => "Nada sirve"
    ]);
  }
}
