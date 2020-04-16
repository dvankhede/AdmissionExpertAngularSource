
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers, URLSearchParams, Response } from "@angular/http";
import { Cookie } from 'ng2-cookies';

import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


export class Foo {
  constructor(
    public id: number,
    public name: string) { }
}

@Injectable()
export class OAuthService {
  public options:any;
  constructor(
    private _router: Router, private _http: Http) { }

  obtainAccessToken(userName: string, password: string) {

    let params = new URLSearchParams();

    params.append('grant_type', 'password');
    params.append('username', userName);
    params.append('password', password);
    let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("springboot:AB8kmzoNzl100") });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(environment.apiUrl + 'oauth/token', params.toString(), options);
  }

  saveToken(token) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);

    var headers = new Headers({ 'Authorization': 'Bearer '
      +Cookie.get('access_token')});
      this.options = new RequestOptions({ headers: headers });
      console.log("this.options: ",this.options)
      localStorage.setItem('options',JSON.stringify(this.options));
  }

  getResource(resourceUrl): Observable<Foo> {
    var headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + Cookie.get('access_token') });
    var options = new RequestOptions({ headers: headers });
    return this._http.get(resourceUrl, options)
      .pipe(map((res: Response) => res.json()),
        catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }




  logout() {
    Cookie.delete('access_token');
    this._router.navigate(['/authentication']);
  }
}