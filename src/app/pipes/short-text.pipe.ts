import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(/^(.{100}[^\s]*).*/, "$1") + '...';
  }

}
