import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { id } from '@swimlane/ngx-datatable';
// const headers = new HttpHeaders()
//     .set('Access-Control-Allow-Origin',' http://localhost:4200');
@Injectable({
  providedIn: 'root'
})

export class AllPatientService {
  public selectedpatientId:number;
AllPatientArray = new Array();
editPatientArray = new Array();
updateDataObj;
httpOptions;

  constructor(private http: HttpClient){
   
   }
    getAllPatientDetail(){
      return this.http.get('http://localhost:8080/api/v1/all/users');
    }
    editPatient(id){
      // console.log('the id is', id);
       return this.http.get('http://localhost:8080/api/v1/user/' + id ) ;
     }
     public updatePatientDetail( updateDataObj:any,selectedpatientId:any)     {
       //console.log(this.updateDataObj);
       console.log('the data is now in service ',updateDataObj);
       return this.http.put(`http://localhost:8080/api/v1/user/update/${selectedpatientId}` ,
        updateDataObj );
     }
    
}
