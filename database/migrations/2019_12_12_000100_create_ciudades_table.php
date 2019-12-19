<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCiudadesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('ciudades', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('estado_id');
      $table->string('nombre');
      $table->timestamps();
      $table->softDeletes();
      // Llave foranea
      $table
        ->foreign('estado_id')
        ->references('id')
        ->on('estados')
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
    Schema::dropIfExists('ciudades');
  }
}
