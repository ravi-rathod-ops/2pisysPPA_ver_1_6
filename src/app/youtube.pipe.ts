import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'renderUrl'
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom:DomSanitizer)
  {

  }
  transform(value, ...args){
    // console.log(value);
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
