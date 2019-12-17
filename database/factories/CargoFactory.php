<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Cargo;
use Faker\Generator as Faker;

$factory->define(Cargo::class, function (Faker $faker) {
  return [
    "nombre" => $faker->word(),
    "descripcion" => $faker->sentence(),
  ];
});
