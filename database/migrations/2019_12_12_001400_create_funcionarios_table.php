<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFuncionariosTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('funcionarios', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table
        ->bigInteger('persona_id')
        ->unsigned()
        ->unique();
      $table->bigInteger('cargo_id')->unsigned();
      $table->bigInteger('ubicacion_id')->unsigned();
      $table->timestamps();
      $table->softDeletes();
      // Llaves foraneas
      $table
        ->foreign('persona_id')
        ->references('id')
        ->on('personas')
        ->onDelete('cascade');
      $table
        ->foreign('cargo_id')
        ->references('id')
        ->on('cargos')
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
    Schema::dropIfExists('funcionarios');
  }
}
