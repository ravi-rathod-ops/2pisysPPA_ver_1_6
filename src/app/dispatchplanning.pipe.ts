import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dispatchplanning'
})
export class DispatchplanningPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
