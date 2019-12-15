<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAreasTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('areas', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('organizacion_id');
      $table->timestamps();
      $table->softDeletes();
      // Llaves foráneas
      $table
        ->foreign('organizacion_id')
        ->references('id')
        ->on('organizaciones')
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
    Schema::dropIfExists('areas');
  }
}
