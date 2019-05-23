import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortdata'
})
export class SortdataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort();
  }

}
