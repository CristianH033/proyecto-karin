<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('productos', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('tipo_producto_id');
      $table->string('nombre');
      $table->string('descripcion')->nullable();
      $table->timestamps();
      $table->softDeletes();
      // Llave foranea
      $table
        ->foreign('tipo_producto_id')
        ->references('id')
        ->on('tipo_productos')
        ->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('productos');
  }
}
