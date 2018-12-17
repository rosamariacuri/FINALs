import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { Device } from '@ionic-native/device';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicesProvider } from '../providers/services/services';
import { TextPage } from '../pages/text/text';
import { AddPage } from '../pages/add/add';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StartPage } from '../pages/start/start';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,TextPage,AddPage,LoginPage,RegisterPage,StartPage,ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,TextPage,AddPage,LoginPage,RegisterPage,StartPage,ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Device,
    HttpClient,HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider
  ]
})
export class AppModule {}
