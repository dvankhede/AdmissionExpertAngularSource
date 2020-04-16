import { Injectable } from '@angular/core';
import { AddUser } from '../authentication/models/addUser.model';
import { HttpClient } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EditPatientService {
 editAddedPatient: AddUser = new AddUser();
selectedIdEdit;;
  constructor(private http: HttpClient) { }
  editPatient(id){
    console.log('the id is', id);
    return this.http.get('http://localhost:8080/api/v1/user/' + this.selectedIdEdit ) ;
 
  }
}
