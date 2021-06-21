import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculaPipe implements PipeTransform {
  transform(valor: string, enMayuscula: boolean = true): string {
    if (enMayuscula) {
      return valor.toUpperCase();
    } else {
      return valor;
    }
  }
}
