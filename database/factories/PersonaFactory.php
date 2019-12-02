<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Persona;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Persona::class, function (Faker $faker) {
  $genders = ['male', 'female'];
  $index = array_rand($genders);
  $gender = $genders[$index];

  // $startDate = Carbon::now();
  $startDate = Carbon::parse('2000-12-31')->timestamp;
  $endDate = Carbon::now()->subYears(30)->timestamp;

  return [
    'dni' => $faker->randomNumber(9),
    'primer_nombre' => mb_strtolower($faker->firstName($gender)),
    'segundo_nombre' => mb_strtolower($faker->firstName($gender)),
    'primer_apellido' => mb_strtolower($faker->lastName()),
    'segundo_apellido' => mb_strtolower($faker->lastName()),
    'fecha_nacimiento' => Carbon::createFromTimestamp(
      rand($endDate, $startDate)
    )->format('Y-m-d'),
    'genero_id' => $index + 1
  ];
});
