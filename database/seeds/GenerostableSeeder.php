<?php

use App\Genero;
use Illuminate\Database\Seeder;

class GenerostableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $generos = ["masculino", "femenino"];

    foreach ($generos as $genero) {
      factory(Genero::class)->create([
        'genero' => $genero
      ]);
    }
  }
}
