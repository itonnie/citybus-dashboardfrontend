import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaccoAuthPopOverPage } from './sacco-auth-pop-over';

@NgModule({
  declarations: [
    SaccoAuthPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(SaccoAuthPopOverPage),
  ],
  exports: [
    SaccoAuthPopOverPage
  ]
})
export class SaccoAuthPopOverPageModule {}
