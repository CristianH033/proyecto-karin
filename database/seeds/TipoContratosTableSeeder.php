<?php

use App\TipoContrato;
use Illuminate\Database\Seeder;

class TipoContratosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(TipoContrato::class)->create([
      "tipo" => "prestación de servicios"
    ]);
  }
}
