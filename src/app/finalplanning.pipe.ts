import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finalplanning'
})
export class FinalplanningPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
