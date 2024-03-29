import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from './oauth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

constructor(private httpClient: HttpClient, private oauth: OAuthService) { }



getAllState(){
  return this.httpClient.get(environment.apiUrl + 'api/v1/state', this.oauth.options );
}

}

