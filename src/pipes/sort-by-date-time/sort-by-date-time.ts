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

  transform(data:dateObjectFormat) {
  let dateTimeObj={ 
    date :'',
    time:''
   }

 data.cDate.month = data.cDate.month +1

let tempDay = '', tempMonth = '', tempMinute = '', tempHour = '',tempYear='';

if(data.cDate.day < 10){
  tempDay = '0'+data.cDate.day.toString()
}else{
  tempDay = data.cDate.day.toString()
}

if(data.cDate.month < 10){
  tempMonth = '0'+(data.cDate.month).toString()
}else{
  tempMonth = (data.cDate.month).toString()
}

if(data.cTime.hour < 10){
  tempHour = '0'+data.cTime.hour.toString()
}else{
  tempHour = data.cTime.hour.toString()
}

if(data.cTime.minute < 10){
  tempMinute = '0'+data.cTime.minute.toString()
}else{
  tempMinute = data.cTime.minute.toString()
}

tempYear = data.cDate.year.toString()

dateTimeObj.date = tempYear+'-'+tempMonth+'-'+tempDay
dateTimeObj.time = tempHour+':'+tempMinute


  return dateTimeObj
  }
}




interface dateObjectFormat{
  cDate:{
    year:number,
    month:number,
    day:number
  },
  cTime:{
    hour:number,
    minute:number
  }
}
