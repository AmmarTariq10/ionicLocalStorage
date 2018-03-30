import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ArrangePipe } from '../../pipes/arrange/arrange';



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
arrangedData=[]
arrangeArray = new ArrangePipe()

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    
      this.getData()
  
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
    let index = parseInt(JSON.parse(item).key)
    console.log('key int :', index)
      this.data[index] = JSON.parse(item)
console.log(this.data)

    }
 
}





}
