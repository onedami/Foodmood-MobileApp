import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mealPic: any = "Elekute";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  saveMeal(){
    console.log(this.mealPic);
  }

  launchRegisterPage(){
    let modal = this.modalCtrl.create(RegisterPage)
    //modal.onDidDismiss((bioData)=>{console.log(bioData);});
    modal.present();
  }
}
