<?php

use App\Operador;
use Illuminate\Database\Seeder;

class OperadoresTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Operador::class)->create([
      "persona_id" => 1
    ]);
  }
}
