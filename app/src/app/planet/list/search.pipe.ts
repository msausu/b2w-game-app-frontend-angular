import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from '../model/planet';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Planet[], search: string): Planet[] {
    return list && search.length > 0 ? list.filter(planet => planet.nome.includes(search)) : list;
  }
}
