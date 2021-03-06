<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContratoProductoTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('contrato_producto', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('contrato_id');
      $table->unsignedBigInteger('producto_id');
      $table->unsignedBigInteger('cantidad');
      $table->timestamps();
      $table->softDeletes();
      // Foreign Keys
      $table
        ->foreign('contrato_id')
        ->references('id')
        ->on('contratos')
        ->onDelete('cascade');
      $table
        ->foreign('producto_id')
        ->references('id')
        ->on('productos')
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
    Schema::dropIfExists('contrato_producto');
  }
}
