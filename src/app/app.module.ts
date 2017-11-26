import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaccoAuthPopOverPage } from '../pages/sacco-auth-pop-over/sacco-auth-pop-over';
import { SaccoownerPage } from "../pages/saccoowner/saccoowner"; 

//services
import { LocalData } from "../services/localdata";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SaccoAuthPopOverPage,
    SaccoownerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SaccoAuthPopOverPage,
    SaccoownerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
