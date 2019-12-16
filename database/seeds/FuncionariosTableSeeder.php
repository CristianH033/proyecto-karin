<?php

use App\Funcionario;
use Illuminate\Database\Seeder;

class FuncionariosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Funcionario::class)->create([
      "persona_id" => 1,
      "cargo_id" => 1,
      "ubicacion_id" => 1
    ]);
  }
}
