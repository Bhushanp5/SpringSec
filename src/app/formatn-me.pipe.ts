import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatnMe'
})
export class FormatnMePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
