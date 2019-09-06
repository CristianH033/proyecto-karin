<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContratosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('contratos', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('tipo_contrato_id')->unsigned();
      $table->bigInteger('proovedor_id')->unsigned();
      $table->bigInteger('cliente_id')->unsigned();
      $table->timestamps();
      // Llave Foranea
      $table
        ->foreign('tipo_contrato_id')
        ->references('id')
        ->on('tipo_contratos')
        ->onDelete('cascade');
      $table
        ->foreign('proovedor_id')
        ->references('id')
        ->on('terceros')
        ->onDelete('cascade');
      $table
        ->foreign('cliente_id')
        ->references('id')
        ->on('terceros')
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
    Schema::dropIfExists('contratos');
  }
}
