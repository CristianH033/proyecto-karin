<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    $this->call(PaisesTableSeeder::class);
    $this->call(EstadosTableSeeder::class);
    $this->call(CiudadesTableSeeder::class);
    $this->call(GenerostableSeeder::class);
    $this->call(PersonasTableSeeder::class);
    $this->call(OrganizacionesTableSeeder::class);
    $this->call(SedesTableSeeder::class);
    $this->call(TipoUbicacionesTableSeeder::class);
    $this->call(UbicacionesTableSeeder::class);
    $this->call(UsersTableSeeder::class);
    $this->call(TipoTercerosTableSeeder::class);
    $this->call(TercerosTableSeeder::class);
    $this->call(TipoProductosTableSeeder::class);
    $this->call(ProductosTableSeeder::class);
    $this->call(TipoServiciosTableSeeder::class);
    $this->call(ServiciosTableSeeder::class);
    $this->call(TipoContratosTableSeeder::class);
    $this->call(ContratosTableSeeder::class);
    $this->call(FabricantesTableSeeder::class);
    $this->call(ModelosTableSeeder::class);
    $this->call(TipoDispositivosTableSeeder::class);
    $this->call(DispositivosTableSeeder::class);
    $this->call(TipoComponentesTableSeeder::class);
    $this->call(ComponentesTableSeeder::class);
    $this->call(GarantiasTableSeeder::class);
    $this->call(CargosTableSeeder::class);
    $this->call(AreasTableSeeder::class);
    $this->call(FuncionariosTableSeeder::class);
    $this->call(OperadoresTableSeeder::class);
    $this->call(TagsTableSeeder::class);
    $this->call(OtrosisTableSeeder::class);
    $this->call(TrasladosTableSeeder::class);
    $this->call(EstadoIncidenciasTableSeeder::class);
    $this->call(IncidenciasTableSeeder::class);
    $this->call(EventosTableSeeder::class);
    $this->call(RolesTableSeeder::class);
    $this->call(AbilitiesTableSeeder::class);
    $this->call(AssignAbilitiesToRolesSeeder::class);
    $this->call(AssignRolesToUsersSeeder::class);
    // $this->call(EstacionTrabajosTableSeeder::class);
    // $this->call(InventariosTableSeeder::class);
  }
}
