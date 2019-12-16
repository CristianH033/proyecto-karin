<?php

use App\TipoServicio;
use Illuminate\Database\Seeder;

class TipoServiciosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(TipoServicio::class)->create([
      "tipo" => "tipo"
    ]);
  }
}
