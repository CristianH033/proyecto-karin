<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUbicacionesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('ubicaciones', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('tipo_ubicacion_id');
      $table->unsignedBigInteger('sede_id');
      $table->string('ubicacion');
      $table->longText('descripcion')->nullable();
      $table->timestamps();
      $table->softDeletes();
      // Llaves foráneas
      $table
        ->foreign('tipo_ubicacion_id')
        ->references('id')
        ->on('tipo_ubicaciones')
        ->onDelete('cascade');
      $table
        ->foreign('sede_id')
        ->references('id')
        ->on('sedes')
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
    Schema::dropIfExists('ubicaciones');
  }
}
