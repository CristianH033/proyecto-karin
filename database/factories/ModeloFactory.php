<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Modelo;
use Faker\Generator as Faker;

$factory->define(Modelo::class, function (Faker $faker) {
  return [
    "nombre" => $faker->unique()->word(),
    "caracteristicas_tecnicas" => json_encode([])
  ];
});
