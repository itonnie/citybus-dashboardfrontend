import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaccoownerPage } from './saccoowner';

@NgModule({
  declarations: [
    SaccoownerPage,
  ],
  imports: [
    IonicPageModule.forChild(SaccoownerPage),
  ],
  exports: [
    SaccoownerPage
  ]
})
export class SaccoownerPageModule {}
