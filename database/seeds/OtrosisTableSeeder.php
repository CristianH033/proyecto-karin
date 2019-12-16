<?php

use App\Otrosi;
use Illuminate\Database\Seeder;

class OtrosisTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Otrosi::class)->create([]);
  }
}
