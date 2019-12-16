<?php

use App\Cargo;
use Illuminate\Database\Seeder;

class CargosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Cargo::class)->create([
      "nombre" => "director ejecutivo",
      "descripcion" => "director ejecutivo"
    ]);
  }
}
