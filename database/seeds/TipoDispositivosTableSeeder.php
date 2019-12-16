<?php

use App\TipoDispositivo;
use Illuminate\Database\Seeder;

class TipoDispositivosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(TipoDispositivo::class)->create([
      "tipo" => "Computo"
    ]);
  }
}
