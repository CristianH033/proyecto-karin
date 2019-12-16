<?php

use App\Garantia;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class GarantiasTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Garantia::class)->create([
      "garantizable" => 1,
      "nombre" => "garantia de cumplimiento",
      "descripcion" => "bla bla bla bla",
      "fecha_inicio" => Carbon::now(),
      "fecha_fin" => Carbon::now()->addYear(1)
    ]);
  }
}
