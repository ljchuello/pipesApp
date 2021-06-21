import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuscula',
})
export class MinusculaPipe implements PipeTransform {
  transform(txt: string): string {
    return txt.toLocaleLowerCase();
  }
}
