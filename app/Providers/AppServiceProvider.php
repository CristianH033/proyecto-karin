<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    //
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    Validator::extend('iunique', function (
      $attribute,
      $value,
      $parameters,
      $validator
    ) {
      $query = DB::table($parameters[0]);

      $column = array_key_exists(1, $parameters)
        ? $query->getGrammar()->wrap($parameters[1])
        : $attribute;

      $idToIgnore = array_key_exists(2, $parameters) ? $parameters[2] : null;

      if ($idToIgnore) {
        return !$query
          ->whereRaw("lower({$column}) = lower(?)", [$value])
          ->whereRaw("id != ?", [$idToIgnore])
          ->count();
      }

      return !$query
        ->whereRaw("lower({$column}) = lower(?)", [$value])
        ->count();
    });

    Validator::replacer('iunique', function (
      $message,
      $attribute,
      $rule,
      $parameters
    ) {
      return str_replace(":attribute", $attribute, $message);
    });
  }
}
