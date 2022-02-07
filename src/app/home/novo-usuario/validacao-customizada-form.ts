import { AbstractControl } from "@angular/forms";

export function validacaoCustomizadaForm (atributo: AbstractControl){

  const valor = atributo.value as String;

  if (valor !== valor.toLowerCase()) {
    return {minusculo: true};
  } else {
    return null;
  }


}
