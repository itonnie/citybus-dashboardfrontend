import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-sacco-auth-pop-over',
  templateUrl: 'sacco-auth-pop-over.html',
})
export class SaccoAuthPopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public vc: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaccoAuthPopOverPage');
  }

  closePopup() {
    this.vc.dismiss();
  }

}
