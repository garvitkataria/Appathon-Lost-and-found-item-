import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DjangoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DjangoProvider {

  constructor(public http: Http) {
    console.log('Hello DjangoProvider Provider');

  }
  get languages()
  {
  	return(this.http.get("http://127.0.0.1:8000/languages/"));
  }
}
