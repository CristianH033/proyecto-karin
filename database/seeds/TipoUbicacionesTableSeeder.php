<?php

use App\TipoUbicacion;
use Illuminate\Database\Seeder;

class TipoUbicacionesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(TipoUbicacion::class)->create([
      "tipo" => "Palito"
    ]);
  }
}
