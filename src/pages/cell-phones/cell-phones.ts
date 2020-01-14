import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CellPhonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "cellPhones", segment: "cellPhones" })
@Component({
  selector: 'page-cell-phones',
  templateUrl: 'cell-phones.html',
})
export class CellPhonesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CellPhonesPage');
  }

}
