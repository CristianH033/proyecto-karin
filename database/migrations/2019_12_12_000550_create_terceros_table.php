<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTercerosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('terceros', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('tipo_tercero_id');
      $table->unsignedBigInteger('tercereable_id');
      $table->string('tercereable_type');
      $table->timestamps();
      $table->softDeletes();
      // Llaves Foráneas
      $table
        ->foreign('tipo_tercero_id')
        ->references('id')
        ->on('tipo_terceros')
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
    Schema::dropIfExists('terceros');
  }
}
