<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIncidenciasTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('incidencias', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('estado_incidencia_id');
      $table->unsignedBigInteger('solicitante_id');
      $table->unsignedBigInteger('responsable_id')->nullable();
      $table->unsignedBigInteger('incidenciable_id');
      $table->string('incidenciable_type');
      $table->string('titulo');
      $table->longText('descripcion')->nullable();
      $table->timestamps();
      $table->softDeletes();
      // Llaves foráneas
      $table
        ->foreign('estado_incidencia_id')
        ->references('id')
        ->on('estado_incidencias')
        ->onDelete('cascade');
      $table
        ->foreign('solicitante_id')
        ->references('id')
        ->on('personas')
        ->onDelete('cascade');
      $table
        ->foreign('responsable_id')
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
    Schema::dropIfExists('incidencias');
  }
}
