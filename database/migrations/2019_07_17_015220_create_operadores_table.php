<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperadoresTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('operadores', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table
        ->bigInteger('persona_id')
        ->unsigned()
        ->unique();
      $table->timestamps();
      $table->softDeletes();
      // Llaves foraneas
      $table
        ->foreign('persona_id')
        ->references('id')
        ->on('personas')
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
    Schema::dropIfExists('operadores');
  }
}
