<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiciosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('servicios', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('tipo_servicio_id')->unsigned();
      $table->string('nombre');
      $table->timestamps();
      $table->softDeletes();
      // Llave foranea
      $table
        ->foreign('tipo_servicio_id')
        ->references('id')
        ->on('tipo_servicios')
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
    Schema::dropIfExists('servicios');
  }
}
