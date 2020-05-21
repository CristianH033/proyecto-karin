<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AreaCreateRequest extends FormRequest
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
      'organizacion_id' => 'required|exists:organizaciones,id',
      'nombre' => 'required|iunique:areas|max:255'
    ];
  }

  public function attributes()
  {
    return [
      'organizacion_id' => 'organización'
    ];
  }
}
