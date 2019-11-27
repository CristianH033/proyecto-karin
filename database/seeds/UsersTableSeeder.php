<?php

use App\User;
use App\Persona;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    factory(User::class)->create([
      'persona_id' => Persona::where('dni', 1057015139)->first()->id,
      'email' => 'cristian_david033@hotmail.com'
    ]);

    foreach (Persona::where('dni', '!=', 1057015139)->take(10)->get() as $persona) {
      factory(User::class)->create([
        'persona_id' => $persona->id
      ]);
    }
  }
}
