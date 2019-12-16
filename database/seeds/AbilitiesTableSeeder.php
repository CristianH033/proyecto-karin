<?php

use Illuminate\Database\Seeder;
use Silber\Bouncer\BouncerFacade as Bouncer;
class AbilitiesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $abilities = [
      // Roles
      ['name' => 'view-roles', 'title' => 'View roles'],
      ['name' => 'assign-roles', 'title' => 'Assign roles'],
      ['name' => 'remove-roles', 'title' => 'Remove roles'],
      // Abilities
      ['name' => 'view-abilities', 'title' => 'View abilities'],
      ['name' => 'assign-abilities', 'title' => 'Assign abilities'],
      ['name' => 'remove-abilities', 'title' => 'Remove abilities'],
      // Users
      ['name' => 'view-users', 'title' => 'View users'],
      ['name' => 'create-users', 'title' => 'Create users'],
      ['name' => 'update-users', 'title' => 'Update users'],
      ['name' => 'delete-users', 'title' => 'Delete users']
    ];

    foreach ($abilities as $ability) {
      Bouncer::ability()->firstOrCreate($ability);
    }
  }
}
