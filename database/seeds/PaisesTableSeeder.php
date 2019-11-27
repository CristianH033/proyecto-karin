<?php

use App\Pais;
use Illuminate\Database\Seeder;

class PaisesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Pais::class, 1)->create();
  }
}
