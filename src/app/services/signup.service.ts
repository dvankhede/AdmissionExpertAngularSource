import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { SignupModel } from '../authentication/models/signup.models';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signupObj : SignupModel = new SignupModel();
  constructor(private http: HttpClient) {}
  signUpUser(){
 return this.http.post('http://139.59.40.180:8080/medinosys-api/api/v1/user/signup',this.signupObj);
  }
}
