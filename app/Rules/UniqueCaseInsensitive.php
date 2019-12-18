<?php

namespace App\Rules;

use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Validation\Rule;

class UniqueCaseInsensitive implements Rule
{
  /**
   * Create a new rule instance.
   *
   * @return void
   */
  public function __construct()
  {
    //
  }

  /**
   * Determine if the validation rule passes.
   *
   * @param  string  $attribute
   * @param  mixed  $value
   * @param  mixed  $parameters
   * @param  mixed  $validator
   * @return bool
   */
  public function passes($attribute, $value, $parameters, $validator)
  {
    exit($attribute);
    $query = DB::table($parameters[0]);
    $column = array_key_exists(1, $parameters) ? $query->getGrammar()->wrap($parameters[1]) : "";
    return !$query->whereRaw("lower({$column}) = lower(?)", [$value])->count();
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message()
  {
    return 'The validation error message.';
  }
}
