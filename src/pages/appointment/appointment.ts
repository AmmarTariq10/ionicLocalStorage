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
  'cTime':'',
  'cDate':''
}


constructor(public view: ViewController, public navParams: NavParams, public alert: AlertController) {
  this.getCurrentDate()
}


getCurrentDate(){
let cd = new Date();
console.log(cd.toISOString())
this.currentDateTime.cDate = cd.toISOString().substring(0,10)
console.log(this.currentDateTime.cDate)
this.currentDateTime.cTime = cd.toISOString().substring(11,16)
console.log(this.currentDateTime.cTime)
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
          }
        ]
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
