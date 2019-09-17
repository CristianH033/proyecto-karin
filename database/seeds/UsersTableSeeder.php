<?php

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
    factory(App\User::class)->create([
      'name' => 'cristian home',
      'email' => 'crist_david033@hotmail.com'
    ]);

    factory(App\User::class, 5)->create();
  }
}
