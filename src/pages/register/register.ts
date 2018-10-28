import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
/*   bioData: any= {
      age: 0,
      gender: '',
      height: 0,
      weight: 0
    };
*/
    age: number;
    gender: string;
    height: number;
    weight: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController
    , public storage: Storage) {
      this.storage.get('age').then((age)=>this.age=age);
      this.storage.get('gender').then((gender)=>this.gender=gender);
      this.storage.get('height').then((height)=>this.height=height);
      this.storage.get('weight').then((weight)=>this.weight=weight);
      //console.log(this.bioData);
  }

  ionViewDidLoad() {
 }

  saveRegisterPage(){
    this.storage.set('age', this.age);
    this.storage.set('gender', this.gender);
    this.storage.set('weight', this.weight);
    this.storage.set('height', this.height);
    this.viewCtrl.dismiss();
  }
  exitRegisterPage(){
    this.viewCtrl.dismiss();
  }
}
