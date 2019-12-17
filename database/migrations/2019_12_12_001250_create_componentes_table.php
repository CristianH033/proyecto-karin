<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComponentesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('componentes', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('modelo_id');
      $table->unsignedBigInteger('tipo_componente_id');
      $table->unsignedBigInteger('ubicacion_id')->nullable();
      $table->unsignedBigInteger('dispositivo_id')->nullable();
      $table->string('serial')->unique();
      $table->json('caracteristicas_tecnicas')->nullable();
      $table->timestamps();
      $table->softDeletes();
      // Llaves foráneas
      $table
        ->foreign('modelo_id')
        ->references('id')
        ->on('modelos')
        ->onDelete('cascade');
      $table
        ->foreign('tipo_componente_id')
        ->references('id')
        ->on('tipo_componentes')
        ->onDelete('cascade');
      $table
        ->foreign('dispositivo_id')
        ->references('id')
        ->on('dispositivos')
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
    Schema::dropIfExists('componentes');
  }
}
