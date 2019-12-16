<?php

use Illuminate\Database\Seeder;
use Silber\Bouncer\BouncerFacade as Bouncer;

class AssignRolesToUsersSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    foreach (App\User::all() as $user) {
      $user->assign(
        Bouncer::role()
          ->get()
          ->random()
      );
    }
  }
}
