import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

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
  user:any;

  constructor(public services:ServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      userName:"",
      password:"",
      gender:"",
      birth:"",
      estatus:"1",
      role_id:"3"

    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    console.log(this.user);
    this.services.register(this.user).subscribe(
      (result)=>{
        this.services.generateCrud('post','users');
        this.navCtrl.pop();
      }
    )    
  }

}
