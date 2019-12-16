<?php

use App\TipoComponente;
use Illuminate\Database\Seeder;

class TipoComponentesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(TipoComponente::class)->create([
      "tipo" => "procesador"
    ]);
  }
}
