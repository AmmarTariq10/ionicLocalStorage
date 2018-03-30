import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController } from 'ionic-angular';
import { SortByDateTimePipe } from '../../pipes/sort-by-date-time/sort-by-date-time';
import { IntDtPipe } from '../../pipes/int-dt/int-dt';
import { KeyCreatorPipe } from '../../pipes/key-creator/key-creator';

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})


export class AppointmentPage {

maxYear: string

keyCreator = new KeyCreatorPipe()
appointment={
  'key':0,
  'title':'',
  'date':'',
  'time':'',
  'desp':''
}

formDate=''
formTime=''
formTitle=''

formDesp=''

minValDate = ''
minValTime = ''


currentDateTime = {
  cTime:{
    hour:0,
    minute:0},
  cDate:{
      year:0,
      month:0,
      day:0}
}

    currentDateTimeString = {
    time: '',
      date:''
    }

format  = new SortByDateTimePipe();
intDt = new IntDtPipe();


constructor(public view: ViewController, public navParams: NavParams, public alert: AlertController) {this.getCurrentDate()}

getCurrentDate(){
            let cd = new Date()
            this.currentDateTime = this.intDt.transform(cd)
            console.log('cd to int',this.currentDateTime)
            this.currentDateTimeString = this.format.transform(this.currentDateTime)
            console.log('cd to string',this.currentDateTime)
            this.minValDate = this.currentDateTimeString.date
            this.minValTime = this.currentDateTimeString.time
            this.maxYear = (this.currentDateTime.cDate.year + 5).toString()
          }


dismiss(){this.view.dismiss()}



addAppointment(){
              this.appointment.title=this.formTitle
              this.appointment.date=this.formDate
              this.appointment.time=this.formTime
              this.appointment.desp=this.formDesp

   console.log('form Date',this.formDate)
   console.log('form Time',this.formTime)

              this.confirmation()
   }



dateChangeEhandler(date){
              console.log('date change to ', date)    
              this.getCurrentDate()
            if(date == this.currentDateTimeString.date){
              console.log('same date selected')
              this.minValTime = this.currentDateTimeString.time  
            }else{
              console.log('different date selected')
              this.minValTime = '00:00'
            }
}

confirmation(){

      let alert = this.alert.create({
                title: this.appointment.title,
                message: 'Are you sure want to add an appointment for ' + this.appointment.date + ' time : ' + this.appointment.time,
                buttons: [
                      {
                      text: 'Save',
                      handler: ()=>{
                      this.saveAppointment()
                      this.formDate=''
                      this.formTime=''
                      this.formTitle=''
                      console.log('appointment saved')  
                      }
                },

                      {
                        text: 'Cancel',
                        handler: ()=>{
                            this.formDate=''
                            this.formTime=''
                            this.formTitle=''
                        }
                      }]
            });
            alert.present();
}

              saveAppointment(){
                let key = this.keyCreator.transform(this.formDate,this.formTime)
                console.log('key genertated is ',key)
                this.appointment.key = key
                if(this.formDate != '' && this.formTime != '' && this.formTitle != ''){
                  localStorage.setItem(JSON.stringify(key),JSON.stringify(this.appointment)) 
                  this.dismiss()
                  }else{
                    console.log('null values are not accepted')
                  }
              }
}