<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContratoServicioTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('contrato_servicio', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('contrato_id');
      $table->unsignedBigInteger('servicio_id');
      $table->unsignedBigInteger('garantia_id')->nullable();
      $table->unsignedBigInteger('cantidad');
      $table->timestamps();
      $table->softDeletes();
      // Foreign Keys
      $table
        ->foreign('contrato_id')
        ->references('id')
        ->on('contratos')
        ->onDelete('cascade');
      $table
        ->foreign('servicio_id')
        ->references('id')
        ->on('servicios')
        ->onDelete('cascade');
      $table
        ->foreign('garantia_id')
        ->references('id')
        ->on('garantias')
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
    Schema::dropIfExists('contrato_servicio');
  }
}
