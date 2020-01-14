import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SessionProvider } from '../session/session';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private urlLogin: string = "http://localhost/Miproyecto/login_user.php";

  private urlProfiles: string = "http://localhost/Miproyecto/profiles_user.php";

  private urlRoles: string = "http://localhost/Miproyecto/consulta_roles.php";

  constructor(public http: Http, public session: SessionProvider) {
    console.log('Hello UserProvider Provider');
  }

  consumeLogin(user: string, password: string){

    return this.http.get(

      this.urlLogin,
      { params: { userId: user, userPass: password} }).map(res => res.json());

  }

  consumeProfiles(){

    let userId = this.session.getField("usuario_id", "user")

    return this.http.get(
      this.urlProfiles, { params: { userId: userId } }).map(res => res.json());
    
  }

  consumeRoles(){

    return this.http.get(this.urlRoles).map(res => res.json());
    
  }

}
