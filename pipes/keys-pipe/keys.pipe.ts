import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  transform(value: { [key: string]: any }): any {
    if (value !== undefined) {
      return Object.keys(value);
    } else {
      return value;
    }
  }
}
