import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intDt',
})

export class IntDtPipe implements PipeTransform {
transform(date: Date) {
 let DateTimeIntObj = {cTime:{hour:0,minute:0},cDate:{year:0,month:0,day:0}}
    DateTimeIntObj.cTime.hour = date.getHours()
    DateTimeIntObj.cTime.minute = date.getMinutes()
    DateTimeIntObj.cDate.year =date.getFullYear()
    DateTimeIntObj.cDate.month = date.getMonth() 
    DateTimeIntObj.cDate.day = date.getDate()
   return DateTimeIntObj
}
}
