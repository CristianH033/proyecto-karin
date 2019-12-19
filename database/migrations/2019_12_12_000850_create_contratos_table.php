<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContratosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('contratos', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('tipo_contrato_id');
      $table->unsignedBigInteger('contratable_id');
      $table->string('contratable_type');
      $table->unsignedBigInteger('contratante_id');
      $table->string('contratante_type');
      $table->longText('objeto');
      $table->timestamps();
      $table->softDeletes();
      // Llave Foranea
      $table
        ->foreign('tipo_contrato_id')
        ->references('id')
        ->on('tipo_contratos')
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
    Schema::dropIfExists('contratos');
  }
}
