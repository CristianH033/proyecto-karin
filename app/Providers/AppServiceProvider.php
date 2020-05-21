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
    // VALIDADORES
    /**
     * @Author: Cristian David Home
     * @Date: 2020-01-23 10:16:40
     * @Desc: Validar si el campo es único (case insensitive)
     */
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

    /**
     * @Author: Cristian David Home
     * @Date: 2020-01-23 17:21:28
     * @Desc: Validar si la relación polimorfica existe
     */
    Validator::extend('poly_exists', function (
      $attribute,
      $value,
      $parameters,
      $validator
    ) {
      if (!($type = array_get($validator->getData(), $parameters[0], false))) {
        return false;
      }

      if (Relation::getMorphedModel($type)) {
        $type = Relation::getMorphedModel($type);
      }

      if (!class_exists($type)) {
        return false;
      }

      return !empty(resolve($type)->find($value));
    });

    // REPLACERS DE VALIDADORES
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
