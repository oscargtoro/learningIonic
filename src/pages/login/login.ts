import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { SessionProvider } from '../../providers/session/session';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "login", segment: "login" })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any;
  password: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public con: UserProvider,
    public alertCtrl: AlertController,
    public session: SessionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validateLogin(){

    this.con.consumeLogin(this.user, this.password).subscribe(result => {
      console.log(result);
      console.log(result.length);
        if (result.length > 0)
        {
          result = result[0];
          this.session.set("user", result);
          this.navCtrl.setRoot("start");
        } else {
          this.showAlert("Error", "Invalid User")
        }
    });

  }

  showAlert(head: string, content: string){
    let alert = this.alertCtrl.create({
      title: head,
      subTitle: content,
      buttons: ["OK"],
    })
    alert.present();
  }

}
