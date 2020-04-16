import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   user;
   userObj= { firstName:'',lastName:''}
   profObj: any ={ id: '', firstName: '', middleName: '', lastName: '', email: '',
   mobile: '', address: '' , city: ' ', zipcode:'', dateOfBirth: '',
   gender: '',
    roleVO: {id: '' , name: '', description: '', status:'' },
    stateVO: {id: '', name: '', code: '', status: ''}
  };
  profUpdateObj = { id: '', firstName: '', lastName: '', email: '', city: '',  
   address: '', gender: '', zipcode: '',
    mobile: '', stateId: '' }
  constructor(private http: HttpClient) { 
  
   }
  getProfileDetails(){
    
    return this.http.get('http://139.59.40.180:8080/medinosys-api/api/v1/user');
  }
  updateProfileDetails(updateObj)
  {
    return this.http.put('http://139.59.40.180:8080/medinosys-api/api/v1/user/editprofile', updateObj);
  }
  getState(){
    return this.http.get('http://139.59.40.180:8080/medinosys-api/api/v1/state');
  }
}
