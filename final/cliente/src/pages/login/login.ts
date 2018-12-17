import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { HomePage } from '../home/home';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any;
  token:any;
  userid:any;
  access:any;

  constructor(private device: Device,public services:ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      userName:"",
      password:""
    }
    this.access = {
      ip:"",
      user_id:"",
      user_agent:""
    }
  }
  public ip:any;
  ionViewDidLoad() {
    this.getIp();
  }

  login(){
    this.services.login(this.user).subscribe
    (
      (result) =>{
        console.log(result);
        this.token = result;
        this.userid = this.token.user.id;
        this.access.user_id = this.userid;
        
        this.services.generateCrud('post','users');
        localStorage.setItem('biblioteca',this.token.token)
        
        localStorage.setItem('biblioteca_user',this.token.user.id)
        
        this.createAccess();
        this.navCtrl.setRoot(HomePage);
      }
    )
  }
  getIp(){
    this.services.IP().subscribe(
      (result) =>{
        this.ip = result;
        this.access.ip = this.ip.ip;
        this.access.user_agent = "Android";
        console.log(this.access);
      }
    )
  }

  createAccess(){
    this.services.createAccess(this.access).subscribe(
      (result) =>{
        console.log(result);
      }
    )
  }

}
