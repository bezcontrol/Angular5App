import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchNote'
})
export class SearchNotePipe implements PipeTransform {

  transform(pipeData: any[], pipeModifier: string): any {
    return pipeData.filter(eachItem => {
      return (eachItem['author'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['title'].toLowerCase().includes(pipeModifier.toLowerCase()));
    });
  }

}
