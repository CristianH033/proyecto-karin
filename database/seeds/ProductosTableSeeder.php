<?php

use App\Producto;
use Illuminate\Database\Seeder;

class ProductosTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(Producto::class)->create([
      "tipo_producto_id" => 1,
      "nombre" => "computadores",
      "descripcion" => "equipos de computo"
    ]);
  }
}
