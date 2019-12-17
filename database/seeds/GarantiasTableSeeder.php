<?php

use App\Componente;
use App\Dispositivo;
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
    // $componente = Componente::first();
    $dispositivo = Dispositivo::first();

    $garantia = factory(Garantia::class)->make([
      "nombre" => "garantia de cumplimiento",
      "descripcion" => "bla bla bla bla",
      "fecha_inicio" => Carbon::now(),
      "fecha_fin" => Carbon::now()->addYear(1)
    ]);

    $garantia->garantizable()->associate($dispositivo);
    $garantia->save();
  }
}
