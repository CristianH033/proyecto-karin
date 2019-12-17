<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Componente;
use Faker\Generator as Faker;

$factory->define(Componente::class, function (Faker $faker) {
  return [
    "serial" => $faker->swiftBicNumber(),
    "caracteristicas_tecnicas" => json_encode(["procesador" => "i5"])
  ];
});
