<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ClearAll extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'clear:all';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Limpiar cache y datos y alimentar db';

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
    $this->call('cache:clear');
    $this->call('route:clear');
    $this->call('config:clear');
    $this->call('view:clear');
    $this->call('clear-compiled');
    $this->call('migrate:fresh');
    $this->call('db:seed');
    $this->call('passport:install', ['--force' => 'default']);
  }
}
