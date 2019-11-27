<?php

use App\Persona;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PersonasTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Persona::class)->create([
      'dni' => 1057015139,
      'primer_nombre' => "cristian",
      'segundo_nombre' => "david",
      'primer_apellido' => "home",
      'segundo_apellido' => "acosta",
      'fecha_nacimiento' => Carbon::parse('1988-07-31')->format('Y-m-d'),
      'genero_id' => 1
    ]);

    factory(Persona::class, 100)->create();
  }
}
