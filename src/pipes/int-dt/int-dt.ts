import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the IntDtPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'intDt',
})
export class IntDtPipe implements PipeTransform {

  transform(date: Date) {
    let DateTimeIntObj = {
          cTime:{
            hour:0,
            minute:0
          },
          cDate:{
            year:0,
            month:0,
            day:0
          }
    }
    
    let tempD = ''
    let tempM=''
    let tempMin=''
    let tempHour=''
    console.log('date ',date)
    DateTimeIntObj.cTime.hour = date.getHours()
    console.log('hour : ',DateTimeIntObj.cTime.hour)
    DateTimeIntObj.cTime.minute = date.getMinutes()
    console.log('minute : ',DateTimeIntObj.cTime.minute)
    DateTimeIntObj.cDate.year =date.getFullYear()
    console.log('Year : ',DateTimeIntObj.cDate.year)
    DateTimeIntObj.cDate.month = date.getMonth() 
    console.log('month : ',DateTimeIntObj.cDate.month)
    DateTimeIntObj.cDate.day = date.getDate()
    console.log('day : ',DateTimeIntObj.cDate.day)        
    console.log('Date Object',DateTimeIntObj)
    return DateTimeIntObj

 }
}
