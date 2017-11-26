import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalData } from "../../services/localdata";

@IonicPage()
@Component({
  selector: 'page-saccoowner',
  templateUrl: 'saccoowner.html',
})
export class SaccoownerPage {


  drivers: Driver[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public lD: LocalData) {
    this.lD.getDrivers().subscribe(drivers => {
      this.drivers = drivers;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaccoownerPage');
  }

}

interface Driver {
  numberplate: string;
  drivername: string;
  phonenumber: number;
  router: string;
}
