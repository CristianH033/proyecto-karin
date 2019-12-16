<?php

use App\Tercero;
use Illuminate\Database\Seeder;

class TercerosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Tercero::class)->create([
      "tipo_tercero_id" => 1,
      "tercereable_id" => 1,
      "tercereable_type" => 1
    ]);
  }
}
