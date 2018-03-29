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
  message=''
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    if(localStorage.length == 0){
        this.message = 'You currently have no appointments'
    }else{
      this.getData()
    }
}



addAppointment(){
  console.log('added')
  let AppointmentPageModal = this.modal.create('AppointmentPage')
  AppointmentPageModal.onDidDismiss(() => {
    this.getData()
    console.log('modal dismissed');
  });

  AppointmentPageModal.present()
  }



emptyStorage(){
  localStorage.clear()
  this.data =[]
  this.message = ""
}



getData(){

  for (var j = localStorage.length-1; j>=0; j--) {
      let item = localStorage.getItem(localStorage.key(j));
      this.data[j] = JSON.parse(item)
      console.log(this.data[j])
    }
 console.log(this.data)
}





}
