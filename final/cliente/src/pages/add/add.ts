import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  branch:any;
  editorial:any;
  organization:any;
  value:any;
  constructor(public navCtrl: NavController,public sp:ServicesProvider, public navParams: NavParams) {
    this.branch = {};
    this.editorial = {};
    this.organization = {};
    this.value = this.navParams.get("value");
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  clickMe(item:any){
    if(item == 'branch'){
      this.branch.status = 1;    
      console.log(this.branch);
      this.sp.createBranch(this.branch).subscribe(
        (result) =>{
          console.log(result);
          this.branch = {},
          this.navCtrl.pop();
        }
      )
    }

    if(item == 'editorial'){
      this.editorial.status = 1;    
      
      this.sp.createEditorial(this.editorial).subscribe(
        (result) =>{
          console.log(result);
          this.editorial = {},
          this.navCtrl.pop();
        }
      )
    }
    if(item == 'organization'){
      this.organization.status = 1;    
      
      this.sp.createOrganization(this.organization).subscribe(
        (result) =>{
          console.log(result);
          this.organization = {},
          this.navCtrl.pop();
        }
      )
    }
    
  }

}
