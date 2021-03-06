<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use phpseclib\Math\BigInteger;

class CreatePersonasTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('personas', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('dni')->unique();
      $table->string('primer_nombre');
      $table->string('segundo_nombre')->nullable();
      $table->string('primer_apellido');
      $table->string('segundo_apellido')->nullable();
      $table->date('fecha_nacimiento')->nullable();
      $table->unsignedBigInteger('genero_id');
      $table->timestamps();
      $table->softDeletes();
      // Llaves foraneas
      $table
        ->foreign('genero_id')
        ->references('id')
        ->on('generos')
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
    Schema::dropIfExists('personas');
  }
}
