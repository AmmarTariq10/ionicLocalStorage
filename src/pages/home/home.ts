import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  i = 0;
  data = []
  inputVal: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    if(localStorage.getItem('masterkey')){
      this.i =  parseInt(localStorage.getItem('masterkey'))
      this.getData()
    }


   
    
  }

setData(inputValue){
  if(inputValue != null){
      localStorage.setItem('Datakey'+this.i.toString(),inputValue)
      this.i++
      localStorage.setItem('masterkey',this.i.toString())
      this.data.unshift(inputValue) 
      this.inputVal = ""
    }else{
      console.log('null values are not accepted')
    }
}


addAppointment(){
  console.log('added')
  let AppointmentPageModal = this.modal.create('AppointmentPage')
  AppointmentPageModal.present()

}

emptyStorage(){
  localStorage.clear()
  this.data =[]
  this.i = 0
}

getData(){
    for (var j = localStorage.length; j>0; j--) {
        let item = localStorage.getItem(localStorage.key(j));
        this.data[j] = item
        console.log(item)
      }
   console.log(this.data)
}




}
