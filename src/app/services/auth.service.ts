import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class AuthService{
    loggedIn=false;
    constructor() { }
    
    isAuthenticated(){
        const promise=new Promise(
            (resolve,reject) =>{
                resolve(this.loggedIn=this.login())
            }
        );
        return promise;
    }
    login():boolean{
        let user = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if(user){
            this.loggedIn=true;
        }
        console.info(this.loggedIn);
        return this.loggedIn;
    }
    logout(){
        sessionStorage.clear();
        this.loggedIn=false;

    }

    getToken(){
        return Cookie.get('access_token');
    }

}