<?php

use App\Contrato;
use App\Persona;
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
    $persona = Persona::find(1);

    $contrato = factory(Contrato::class)->make([
      "tipo_contrato_id" => 1
    ]);

    $contrato->contratable()->associate($persona);
    $contrato->contratante()->associate($persona);

    $contrato->save();
  }
}
