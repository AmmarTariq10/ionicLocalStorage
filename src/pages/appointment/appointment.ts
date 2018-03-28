import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
DateTime:any;

  constructor(public view: ViewController, public navParams: NavParams) {
  }


  dismiss(){
    this.view.dismiss()
  }


  // showPicker(){
  //   this.dp.show({
  //     date: new Date(),
  //     mode: 'date',
  //     androidTheme: this.dp.ANDROID_THEMES.THEME_HOLO_DARK
  //   }).then(
  //     date => console.log('Got date: ', date),
  //     err => console.log('Error occurred while getting date: ', err)
  //   );
  // }

  filter(){

    console.log(this.DateTime)
  }
  // filter2(){
  //   console.log(this.someVar2)
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

}
