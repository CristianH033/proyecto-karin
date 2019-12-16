<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\EstadoIncidencia;
use Faker\Generator as Faker;

$factory->define(EstadoIncidencia::class, function (Faker $faker) {
  return [
    "estado" => $faker->randomElement(["abierta", "en proceso", "resuelta"])
  ];
});
