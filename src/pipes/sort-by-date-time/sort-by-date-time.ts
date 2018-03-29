import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortByDateTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortByDateTime',
})
export class SortByDateTimePipe implements PipeTransform {
  currentDateTime = {
    cDate:0,
    cTime:0
  }

  getCurrentDate(){
    let cd = new Date()
    console.log(cd.getTime)
    console.log(cd)
    this.currentDateTime.cDate = parseInt(cd.toISOString().substring(0,10))
    console.log('from pipe',this.currentDateTime.cDate)
    this.currentDateTime.cTime = parseInt(cd.toISOString().substring(11,16))
    console.log('from pipe',this.currentDateTime.cTime)
     }
    
  
  transform(data) {
    
    


    return data
  }
}
