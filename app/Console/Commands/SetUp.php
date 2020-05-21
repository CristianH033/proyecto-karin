<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SetUp extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'setup';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Inicializar proyecto';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Execute the console command.
   *
   * @return mixed
   */
  public function handle()
  {
    copy(".env.example", ".env");
    fopen("database/database.sqlite", "w");
    $this->call('key:generate');
  }
}
