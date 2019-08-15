<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTercerosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('terceros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('identificacion');
            $table->unsignedBigInteger('tipo_tercero_id');
            $table->unique(['identificacion', 'tipo_tercero_id']);
            $table->string('primer_nombre')->nullable();
            $table->string('segundo_nombre')->nullable();
            $table->string('primer_apellido')->nullable();
            $table->string('segundo_apellido')->nullable();
            $table->string('razon_social')->nullable();
            $table->bigInteger('representante_id')->unsigned()->nullable();
            $table->timestamps();
            $table->foreign('tipo_tercero_id')->references('id')->on('tipo_terceros')->onDelete('cascade');
            $table->foreign('representante_id')->references('id')->on('terceros')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('terceros');
    }
}
