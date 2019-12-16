<?php

use App\Area;
use Illuminate\Database\Seeder;

class AreasTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Area::class)->create([
      "organizacion_id" => 1,
      "nombre" => "talento humano"
    ]);
  }
}
