import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculaPipe implements PipeTransform {
  transform(txt: string): string {
    return txt.toUpperCase();
  }
}
