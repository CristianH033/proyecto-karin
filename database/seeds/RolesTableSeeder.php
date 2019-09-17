<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $roles = [
      ['name' => 'admin', 'title' => 'administrator'],
      ['name' => 'operator', 'title' => 'operador'],
      ['name' => 'support', 'title' => 'administrador'],
      ['name' => 'employee', 'title' => 'funcionario']
    ];

    foreach ($roles as $role) {
      Bouncer::role()->firstOrCreate([
        'name' => $role['name'],
        'title' => $role['title']
      ]);
    }
  }
}
