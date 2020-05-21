<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ComponenteCreateRequest extends FormRequest
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
      'modelo_id' => 'required|numeric|exists:modelos,id',
      'tipo_componente_id' => 'required|numeric|exists:tipo_componentes,id',
      'ubicacion_id' => 'required|numeric|exists:ubicaciones,id',
      'dispositivo_id' => 'numeric|exists:dispositivos,id',
      'serial' => 'required|alpha_dash|iunique:componentes,serial',
      'caracteristicas_tecnicas' => 'json'
    ];
  }

  public function attributes()
  {
    return [
      'modelo_id' => 'modelo',
      'tipo_componente_id' => 'tipo de componente',
      'ubicacion_id' => 'ubicacion',
      'dispositivo_id' => 'dispositivo'
    ];
  }
}
