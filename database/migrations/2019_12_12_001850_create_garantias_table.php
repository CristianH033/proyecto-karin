<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGarantiasTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('garantias', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('garantizable_id');
      $table->string('garantizable_type');
      $table->string('nombre');
      $table->text('descripcion')->nullable();
      $table->date('fecha_inicio');
      $table->date('fecha_fin');
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
    Schema::dropIfExists('garantias');
  }
}
