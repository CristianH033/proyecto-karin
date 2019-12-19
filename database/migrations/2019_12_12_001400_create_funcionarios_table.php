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
      $table->unsignedBigInteger('cargo_id');
      // $table->unsignedBigInteger('ubicacion_id');
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
      // $table
      //   ->foreign('ubicacion_id')
      //   ->references('id')
      //   ->on('ubicaciones')
      //   ->onDelete('cascade');
    });

    /** Crear tabla pivote funcionarios ubicaciones */
    Schema::create('funcionario_ubicacion', function (Blueprint $table) {
      $table->unsignedBigInteger('funcionario_id');
      $table->unsignedBigInteger('ubicacion_id');
      $table->timestamps();
      $table->softDeletes();
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
