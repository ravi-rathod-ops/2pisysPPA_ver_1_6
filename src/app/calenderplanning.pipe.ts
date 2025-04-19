import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calenderplanning'
})
export class CalenderplanningPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
