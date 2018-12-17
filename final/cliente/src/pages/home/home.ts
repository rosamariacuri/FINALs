import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { TextPage } from '../text/text';
import { AddPage } from '../add/add';
import { ModalController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  public branchs:any;
  public editoriales:any;
  public organizations:any;
  public copies:any;
  option:any;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public sp:ServicesProvider){
    // this.getBranchs();
    // this.getOrganizations();
    // this.getEditoriales();
    this.option = "Organization";
  }
  addpage = AddPage;
  textPage = TextPage;

  ionViewDidEnter(){
    this.getBranchs();
    this.getOrganizations();
    this.getEditoriales();
    this.getCopies();
  }
  
  presentProfileModal() {
    this.navCtrl.push(ProfilePage);
  }
  getBranchs(){
    this.sp.getBranchs().subscribe(
      (result) =>{
        this.sp.generateCrud('get','branchs');
        let x:any = result;
        this.branchs = x.Branchs;
        // JSON.stringify(this.branchs);
        console.log(this.branchs );
      }
    )
  }
  getEditoriales(){
    this.sp.getEditoriales().subscribe(
      (result) =>{
        this.sp.generateCrud('get','editoriales');
        let x:any = result;
        this.editoriales = x.Editoriales;
        // JSON.stringify(this.branchs);
        console.log(result );
      }
    )
  }
  getOrganizations(){
    this.sp.getOrganization().subscribe(
      (result) =>{
        this.sp.generateCrud('get','organization');
        let x:any = result;
        this.organizations = x.Organizations;
        // JSON.stringify(this.branchs);
        console.log(result );
      }
    )
  }
  getCopies(){
    this.sp.getCopies().subscribe(
      (result) =>{
        this.sp.generateCrud('get','copies');
        let x:any = result;
        this.copies = x.Copies;
        // JSON.stringify(this.branchs);
        console.log(result );
      }
    )
  }
  
  refresh(){
    this.getBranchs();
    this.getOrganizations();
    this.getEditoriales();
  }
  addPage(){
    this.navCtrl.push(AddPage);
  }
  pushPage(item:any) {
    this.navCtrl.push(TextPage);
  }

}
