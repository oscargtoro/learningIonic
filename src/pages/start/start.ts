import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage( { name: "start", segment: "start"})
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  userName: any;
  id: any;
  profiles: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public session:SessionProvider,
    public user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
    this.showUser();
  }

  showUser(){

    this.userName = this.session.getField("nombre", "user");
    this.id = this.session.getField("usuario_id", "user");
    this.bringProfilexUser();

  }

  bringProfilexUser(){

    this.user.consumeProfiles().subscribe(result => {
      this.profiles = result;
      console.log(this.profiles);
    },
    error => { console.log(error) })
  };

  goTo(selection: string){

    this.navCtrl.push(selection)
  };

}
