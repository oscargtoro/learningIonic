//import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  /*constructor(public http: Http) {
    console.log('Hello SessionProvider Provider');
  }*/

  set(sessionName: string, data: any){

    localStorage.setItem(sessionName, JSON.stringify(data));

  }

  getField(field: string, sessionName: string){

    let jsonValue = JSON.parse(localStorage.getItem("user"))
    return jsonValue[field];

  }

  destroy(){

    localStorage.clear();
    
  }

}
