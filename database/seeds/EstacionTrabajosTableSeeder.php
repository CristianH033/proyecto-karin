<?php

use App\EstacionTrabajo;
use Illuminate\Database\Seeder;

class EstacionTrabajosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(EstacionTrabajo::class)->create([
      "sede_id" => 1,
      "ubicacion" => 1
    ]);
  }
}
