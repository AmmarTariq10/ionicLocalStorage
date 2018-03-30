import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'keyCreator',
})
export class KeyCreatorPipe implements PipeTransform {
  
  transform(date:string,time:string) {
    let dateTimeKey = ''
    let tempDateTimeKey = date+time
    dateTimeKey = tempDateTimeKey.replace('-','')
    tempDateTimeKey = dateTimeKey.replace('-','')
    dateTimeKey = tempDateTimeKey.replace(':','')
    
    return parseInt(dateTimeKey)    
  }
}
