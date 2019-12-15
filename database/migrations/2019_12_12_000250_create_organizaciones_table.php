<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizacionesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('organizaciones', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->bigInteger('nit')->unsigned();
      $table->string('nombre');
      $table->unsignedBigInteger('representante_id')->nullable();
      $table->timestamps();
      $table->softDeletes();
      // Llaves foráneas
      $table
        ->foreign('representante_id')
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
    Schema::dropIfExists('organizaciones');
  }
}
