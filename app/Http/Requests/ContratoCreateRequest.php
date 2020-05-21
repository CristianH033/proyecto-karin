<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContratoCreateRequest extends FormRequest
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
      'tipo_contrato_id' => 'numeric|exists:tipo_contratos,id',
      'contratable_id' => 'numeric|exists:tipo_contratos,id',
      'contratante_id' => '',
      'objeto' => ''
    ];
  }

  public function attributes()
  {
    return [
      'tipo_contrato_id' => 'tipo de contrato',
      'contratable_id' => 'contratable',
      'contratante_id' => 'contratante'
    ];
  }
}
