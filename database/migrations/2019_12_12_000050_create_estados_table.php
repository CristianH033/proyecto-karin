<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstadosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('estados', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('pais_id');
      $table->string('nombre');
      $table->timestamps();
      $table->softDeletes();
      // llave foranea
      $table
        ->foreign('pais_id')
        ->references('id')
        ->on('paises')
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
    Schema::dropIfExists('estados');
  }
}
