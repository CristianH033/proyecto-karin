<?php

use App\Estado;
use App\Pais;
use Illuminate\Database\Seeder;

class EstadosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Pais::all()->each(function ($pais) {
      $pais->estados()->saveMany(factory(Estado::class, 20)->make());
    });
  }
}
