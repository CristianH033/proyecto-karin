<?php

use App\Organizacion;
use Illuminate\Database\Seeder;

class OrganizacionesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Organizacion::class)->create([
      "nit" => 1213187321,
      "nombre" => "Palito",
      "representante_id" => 1
    ]);
  }
}
