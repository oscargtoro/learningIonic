import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the RolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "roles", segment: "roles" })
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html',
})
export class RolesPage {

  roles: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RolesPage');
  }

  bringRoles(){

    this.user.consumeRoles().subscribe(result => {
      this.roles = result;
      console.log(this.roles);
    },
    error => { console.log(error) })
  };

}
