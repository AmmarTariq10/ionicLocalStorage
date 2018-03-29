import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})

export class AppointmentPage {
i=0
appointment={
  'title':'',
  'date':'',
  'time':''
}

formDate=''
formTime=''
formTitle=''

currentDateTime = {
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


constructor(public view: ViewController, public navParams: NavParams, public alert: AlertController) {
  this.getCurrentDate()
}

minValDate = ''
minValTime = ''
getCurrentDate(){
            let cd = new Date()
            let tempD = ''
            let tempM=''
            console.log(cd)

            this.currentDateTime.cTime.hour = cd.getHours()
            this.currentDateTime.cTime.minute = cd.getMinutes()

            this.currentDateTime.cDate.year = cd.getFullYear()
            console.log('Year: ',this.currentDateTime.cDate.year)

            this.currentDateTime.cDate.month = cd.getMonth()
            this.currentDateTime.cDate.day = cd.getDay()
            console.log('Date Object',this.currentDateTime)

            if(this.currentDateTime.cDate.month<10){
              tempM = '0'+this.currentDateTime.cDate.month.toString()
            }else{
              tempM = this.currentDateTime.cDate.month.toString()
            }

            if(this.currentDateTime.cDate.day<10){
              tempD = '0'+this.currentDateTime.cDate.day.toString()
            }else{
              tempM = this.currentDateTime.cDate.day.toString()
            }

            this.minValDate = this.currentDateTime.cDate.year.toString()+'-'+tempM+'-'+tempD
            this.minValTime = this.currentDateTime.cTime.hour.toString()+':'+this.currentDateTime.cTime.minute
            console.log(this.minValDate)
            console.log(this.minValTime)

}


dismiss(){
        this.view.dismiss()
}

  
addAppointment(){
      this.appointment.title=this.formTitle
      this.appointment.date=this.formDate
      this.appointment.time=this.formTime
      this.confirmation()
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

    if(this.formDate != '' && this.formTime != '' && this.formTitle != ''){
       localStorage.setItem(this.appointment.title,JSON.stringify(this.appointment)) 
       this.dismiss()
      }else{
        console.log('null values are not accepted')
      }
  }



}
