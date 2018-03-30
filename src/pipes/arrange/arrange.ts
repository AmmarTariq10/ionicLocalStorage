import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'arrange',
})
export class ArrangePipe implements PipeTransform {

  transform(array:appoinmentsArray[]) {
    let arrangedArray;
    let prevKey = 0
    let temp = 0
    for(var i = 0; i<array.length;i++){
    temp = parseInt(array[i].key)

    if(temp>prevKey){

    }


    }

    return arrangedArray
  }
}

interface appoinmentsArray{
key:'',
title:'',
desp:'',
time:'',
date:''
}