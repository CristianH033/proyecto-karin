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
            $table->bigInteger('persona_id')->unsigned()->unique();
            $table->bigInteger('tercero_id')->unsigned();
            $table->bigInteger('cargo_id')->unsigned();
            $table->bigInteger('estacion_trabajo_id')->unsigned();
            $table->timestamps();
            // Llaves foraneas
            $table->foreign('persona_id')->references('id')->on('personas')->onDelete('cascade');
            $table->foreign('tercero_id')->references('id')->on('terceros')->onDelete('cascade');
            $table->foreign('cargo_id')->references('id')->on('cargos')->onDelete('cascade');
            $table->foreign('estacion_trabajo_id')->references('id')->on('estacion_trabajos')->onDelete('cascade');
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
