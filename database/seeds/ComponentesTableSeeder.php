<?php

use App\Componente;
use Illuminate\Database\Seeder;

class ComponentesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Componente::class)->create([
      "modelo_id" => 1,
      "tipo_componente_id" => 1,
      "serial" => "12a12312312a"
    ]);
  }
}
