<?php

use App\Contrato;
use Illuminate\Database\Seeder;

class ContratosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Contrato::class)->create([
      "tipo_contrato_id" => 1,
      "proovedor_id" => 1,
      "cliente_id" => 1
    ]);
  }
}
