<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSedesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('sedes', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('organizacion_id')->unsigned();
      $table->bigInteger('ciudad_id')->unsigned();
      $table->string('nombre');
      $table->string('direccion');
      $table->timestamps();
      $table->softDeletes();
      // Llaves foraneas
      $table
        ->foreign('organizacion_id')
        ->references('id')
        ->on('organizaciones')
        ->onDelete('cascade');
      $table
        ->foreign('ciudad_id')
        ->references('id')
        ->on('ciudades')
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
    Schema::dropIfExists('sedes');
  }
}
