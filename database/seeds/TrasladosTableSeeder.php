<?php

use App\Traslado;
use Illuminate\Database\Seeder;

class TrasladosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Traslado::class)->create([]);
  }
}
