import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usePipe',
})
export class UsePipe implements PipeTransform {
  transform(value: any, displayPipe?: PipeTransform): any {
    if (value !== undefined) {
      return displayPipe && displayPipe.transform
        ? displayPipe.transform(value)
        : value;
    } else {
      return value;
    }
  }
}
