<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ComponenteUpdateRequest extends FormRequest
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
    $id = $this->route('componente')->id;
    return [
      'modelo_id' => 'numeric|exists:modelos,id',
      'tipo_componente_id' => 'numeric|exists:tipo_componentes,id',
      'ubicacion_id' => 'numeric|exists:ubicaciones,id',
      'dispositivo_id' => 'numeric|exists:dispositivos,id',
      'serial' => 'alpha_dash|iunique:componentes,serial,' . $id,
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
