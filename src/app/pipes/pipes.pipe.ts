import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class PipesPipe implements PipeTransform {

  transform(list: any[], text: string): any[] {
    if(!text) return list;
    return list.filter(player => player.id.includes(text))
  }
}
