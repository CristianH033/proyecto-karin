<?php

use App\TipoProducto;
use Illuminate\Database\Seeder;

class TipoProductosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(TipoProducto::class)->create([
      "tipo" => "tipo"
    ]);
  }
}
