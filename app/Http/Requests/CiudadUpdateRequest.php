<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CiudadUpdateRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'nombre' => 'required|max:255',
      'estado_id' => 'required|exists:estados,id'
    ];
  }

  public function attributes()
  {
    return [
      'estado_id' => 'estado'
    ];
  }
}
