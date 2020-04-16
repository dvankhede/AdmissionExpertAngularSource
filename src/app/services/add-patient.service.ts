import { Injectable } from '@angular/core';
import { AddUser } from '../authentication/models/addUser.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {
  getStateList() {
    return this.htttp.get('http://localhost:8080/api/all/state');
  }
  addUser: AddUser = new AddUser();
  constructor(private htttp: HttpClient) { }
  addPatientDetail(user){
    console.log("User Data:::",user);
    console.log(this.addUser);
     return this.htttp.post('http://localhost:8080/api/v1/user/signup',user);
  }
  getCategoryList(){
    return this.htttp.get('http://localhost:8080/api/all/category');
 }

 getCityList(){
  return this.htttp.get('http://localhost:8080/api/all/city');
 }
  
}
