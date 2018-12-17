import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text',
  templateUrl: 'text.html',
})
export class TextPage {
  branch:any;
  type:any;
  edit:any;

  constructor(public alertCtrl:AlertController,public services:ServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.branch = this.navParams.get("value");
    this.type = this.navParams.data.type;;
    this.edit=1;
    console.log(this.type);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextPage');
  }

  clickMe(item:any){
    if(this.type == 's'){
      console.log(this.branch);
      this.services.createBranch(this.branch).subscribe(
        (result) =>{
          this.services.generateCrud('update','branchs');
          console.log(result);
        
          this.navCtrl.pop();
        }
      )
    }

    if(this.type == 'e'){
      
      this.services.createEditorial(this.branch).subscribe(
        (result) =>{
          this.services.generateCrud('update','editoriales');
          console.log(result);
          
          this.navCtrl.pop();
        }
      )
    }
    if(this.type == 'o'){
        
      
      this.services.createOrganization(this.branch).subscribe(
        (result) =>{
          console.log(result);
          this.services.generateCrud('update','organizations');
          
          this.navCtrl.pop();
        }
      )
    }
    
  }
  deleteItem(){
    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Atencion',
      subTitle: 'Deseas eliminar: '+this.branch.name,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            if(this.type == 'o'){
              this.services.deleteBranc(this.branch.id,'organizations').subscribe(
                (result) =>{
                  this.services.generateCrud('delete','organizations');
                  console.log(result);
                  this.navCtrl.pop();
                }
              )
            }
            if(this.type == 'e'){
              this.services.deleteBranc(this.branch.id,'editoriales').subscribe(
                (result) =>{
                  this.services.generateCrud('delete','editoriales');
                  console.log(result);
                  this.navCtrl.pop();
                }
              )
            }
            if(this.type == 's'){
              this.services.deleteBranc(this.branch.id,'branchs').subscribe(
                (result) =>{
                  this.services.generateCrud('delete','branchs');
                  console.log(result);
                  this.navCtrl.pop();
                }
              )
            }
          }
        }
      ]
    });
    alert.present();
  }

}
