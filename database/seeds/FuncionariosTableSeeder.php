<?php

use App\Ubicacion;
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
    $ubicacion = Ubicacion::first();

    $funcionario = factory(Funcionario::class)->create([
      "persona_id" => 1,
      "cargo_id" => 1
    ]);

    $ubicacion->funcionarios()->attach($ubicacion);
    // $funcionario->save();
  }
}
