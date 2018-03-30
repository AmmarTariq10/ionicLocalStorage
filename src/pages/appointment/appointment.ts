import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})

export class AppointmentPage {
  maxYear: string
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
          this.getCurrentDate()}

        minValDate = ''
        minValTime = ''
        getCurrentDate(){


            let cd = new Date()
            let tempD = ''
            let tempM=''
            let tempMin=''
            let tempHour=''
           
            console.log('cd ',cd)

            this.currentDateTime.cTime.hour = cd.getHours()
            console.log('hour : ',this.currentDateTime.cTime.hour)
            this.currentDateTime.cTime.minute = cd.getMinutes()
            console.log('minute : ',this.currentDateTime.cTime.minute)
            this.currentDateTime.cDate.year = cd.getFullYear()
            console.log('Year : ',this.currentDateTime.cDate.year)
            this.currentDateTime.cDate.month = cd.getMonth() 
            console.log('month : ',this.currentDateTime.cDate.month)
            this.currentDateTime.cDate.day = cd.getDate()
            console.log('day : ',this.currentDateTime.cDate.day)        
            console.log('Date Object',this.currentDateTime)

      let formattedDate = this.currentDateTime.cDate.year + '-' + this.currentDateTime.cDate.month + '-' + this.currentDateTime.cDate.day
                    console.log('formatted date ',formattedDate)

            if(this.currentDateTime.cDate.month<10){
              tempM = '0'+this.currentDateTime.cDate.month.toString()
            }else{
              tempM = this.currentDateTime.cDate.month.toString()
            }

            if(this.currentDateTime.cDate.day<10){
              tempD = '0'+this.currentDateTime.cDate.day.toString()
              console.log('asd')
            }else{
              tempD = this.currentDateTime.cDate.day.toString()
              console.log('saf')
            }


      if(this.currentDateTime.cTime.minute<10){
          tempMin = '0'+this.currentDateTime.cTime.minute.toString()
        }else{
         tempMin = this.currentDateTime.cTime.minute.toString()
        }

        if(this.currentDateTime.cTime.hour<10){
          tempHour = '0'+this.currentDateTime.cTime.hour.toString()
        }else{
          tempHour = this.currentDateTime.cTime.hour.toString()
        }



 

            this.minValDate = this.currentDateTime.cDate.year.toString()+'-'+tempM+'-'+tempD
            this.minValTime = tempHour+':'+tempMin
            this.maxYear = (this.currentDateTime.cDate.year + 5).toString()
            console.log('min time',this.minValTime)
            console.log('max Year',this.maxYear)
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
              console.log('form Date',this.formDate)
              console.log('form Time',this.formTime)

              this.confirmation()
            }


      dateChangeEhandler(date){

        let tempM = ''
        let tempD = ''

         console.log('date change to ', date)    
             if(this.currentDateTime.cDate.month<10){
          tempM = '0'+this.currentDateTime.cDate.month.toString()
        }else{
          tempM = this.currentDateTime.cDate.month.toString()
        }

        if(this.currentDateTime.cDate.day<10){
          tempD = '0'+this.currentDateTime.cDate.day.toString()
        }else{
          tempD = this.currentDateTime.cDate.day.toString()
        }

          let formattedDate = this.currentDateTime.cDate.year + '-' + tempM + '-' + tempD
            console.log('formatted date : ',formattedDate)
        let tempMin: string
        let tempHour: string
            if(date == formattedDate){
              console.log('same')
              if(this.currentDateTime.cTime.minute<10){
                tempMin = '0'+this.currentDateTime.cTime.minute.toString()
              }else{
               tempMin = this.currentDateTime.cTime.minute.toString()
              }
      
              if(this.currentDateTime.cTime.hour<10){
                tempHour = '0'+this.currentDateTime.cTime.hour.toString()
              }else{
                tempHour = this.currentDateTime.cTime.hour.toString()
                this.minValTime = tempHour+':'+tempMin
              }
            }else{
              console.log('different')
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

                if(this.formDate != '' && this.formTime != '' && this.formTitle != ''){
                  localStorage.setItem(this.appointment.title,JSON.stringify(this.appointment)) 
                  this.dismiss()
                  }else{
                    console.log('null values are not accepted')
                  }
              }



      }
