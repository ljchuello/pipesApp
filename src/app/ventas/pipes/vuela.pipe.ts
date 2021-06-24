import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(vuela: boolean): string {
    if (vuela) {
      return 'Si vuela';
    } else {
      return 'No vuela';
    }
  }

}
