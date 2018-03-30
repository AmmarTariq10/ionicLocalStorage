import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';




@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  data = [];
  showData = []
  
constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) { this.getData();}


        addAppointment(){
          console.log('added')
          let AppointmentPageModal = this.modal.create('AppointmentPage')
          AppointmentPageModal.onDidDismiss(() => {
            this.getData()
            console.log('modal dismissed');
          });
          AppointmentPageModal.present()}

        emptyStorage(){
          localStorage.clear()
          this.data =[]
      
        }


        getData(){
          this.showData = []
          for (var j = localStorage.length-1; j>=0; j--) {
          let item = localStorage.getItem(localStorage.key(j));
              // let index = parseInt(JSON.parse(item).key)
              this.data[j] = JSON.parse(item)
            }
          console.log(this.data)
          this.data.forEach((element)=>{
            this.showData.push(element)
          })
        console.log('arranged array',this.showData)
        }
}
