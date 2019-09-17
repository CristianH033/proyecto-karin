<?php

use Illuminate\Database\Seeder;

class AssignAbilitiesToRolesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    foreach (Bouncer::ability()->get() as $ability) {
      foreach (Bouncer::role()->get() as $role) {
        Bouncer::allow($role)->to($ability);
      }
    }
  }
}
