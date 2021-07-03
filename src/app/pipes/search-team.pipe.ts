import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTeam'
})
export class SearchTeamPipe implements PipeTransform {

  transform(list: any[], text: string): any[] {
    if(!text) return list;
    return list.filter(team => team.id.includes(text))
  }
  
}

