import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { SaccoAuthPopOverPage } from "../sacco-auth-pop-over/sacco-auth-pop-over";
import { SaccoownerPage } from "../saccoowner/saccoowner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentSaccoOwnerAuth(event) {
    let popover = this.popoverCtrl.create(SaccoAuthPopOverPage);
    popover.present({
      ev: event
    });
  }

  gotoHome() {
    this.navCtrl.push(SaccoownerPage);
  }

}
