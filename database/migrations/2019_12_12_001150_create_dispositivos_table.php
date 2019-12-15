<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDispositivosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('dispositivos', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('tipo_dispositivo_id');
      $table->unsignedBigInteger('modelo_id');
      $table->unsignedBigInteger('ubicacion_id');
      $table->string('serial')->unique();
      $table->json('caracteristicas_tecnicas')->nullable();

      $table->timestamps();
      $table->softDeletes();
      // Llaves foráneas
      $table
        ->foreign('tipo_dispositivo_id')
        ->references('id')
        ->on('tipo_dispositivos')
        ->onDelete('cascade');
      $table
        ->foreign('modelo_id')
        ->references('id')
        ->on('modelos')
        ->onDelete('cascade');
      $table
        ->foreign('ubicacion_id')
        ->references('id')
        ->on('ubicaciones')
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
    Schema::dropIfExists('dispositivos');
  }
}
