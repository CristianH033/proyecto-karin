<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModelosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('modelos', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('fabricante_id');
      $table->string('nombre')->unique();
      $table->json('caracteristicas_tecnicas')->nullable();
      $table->timestamps();
      $table->softDeletes();
      // Llaves foráneas
      $table
        ->foreign('fabricante_id')
        ->references('id')
        ->on('fabricantes')
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
    Schema::dropIfExists('modelos');
  }
}
