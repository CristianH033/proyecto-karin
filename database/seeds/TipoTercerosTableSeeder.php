<?php

use App\TipoTercero;
use Illuminate\Database\Seeder;

class TipoTercerosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(TipoTercero::class)->create([
      "tipo" => "persona"
    ]);
  }
}
