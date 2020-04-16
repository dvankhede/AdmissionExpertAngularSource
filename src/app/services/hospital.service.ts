import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../hospital/hospital';
import { environment } from 'src/environments/environment';
import { OAuthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  //constructor(private httpClient:HttpClient, private hospital:Hospital) { }
  constructor(private httpClient: HttpClient, private oauth: OAuthService) { }

  addHospital(hospital: Hospital) {
    return this.httpClient.post<Hospital>( environment.apiUrl + 'api/v1/hospital', hospital, this.oauth.options);
  }
}



