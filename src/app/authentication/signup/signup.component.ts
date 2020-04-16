import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { SignupModel } from '../models/signup.models';
import { error } from 'protractor';


declare const $: any;

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    password;
    cpassword;
    signUpArray1: SignupModel[] = new Array();
    signUpArray = new Array();
    msg: string;
    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private signUp: SignupService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: [' ',Validators.compose([ Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
            mobileNumber:['',Validators.compose([ Validators.required,Validators.minLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
            password: ['', Validators.compose([Validators.required,Validators.minLength(8)])],
            cpassword: ['', Validators.required]
        }
        ,{validator: this.checkIfMatchingPasswords('password', 'cpassword')});
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams[' returnUrl'] || '/';

        //    [Focus input] * /
        $('.input100').each(function() {
            $(this).on('blur', function() {
                if ($(this).val().trim() !== '') {
                    $(this).addClass('has-val');
                } else {
                    $(this).removeClass('has-val');
                }
            });
        });
    }
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
              // tslint:disable-next-line: one-variable-per-declaration
              const passwordInput = group.controls[passwordKey],
              passwordConfirmationInput = group.controls[passwordConfirmationKey];
              if (passwordInput.value !== passwordConfirmationInput.value) {
            return passwordConfirmationInput.setErrors({notEquivalent: true});
          }
          else {
              return passwordConfirmationInput.setErrors(null);
          }
        };
      }
    get f() { return this.loginForm.controls; }
    get primEmail() { return this.loginForm.get('email'); }
      get cpwd() { return this.loginForm.get('cpassword'); }
      get pwd() { return this.loginForm.get('password'); }
      get mobNumber() { return this.loginForm.get('mobileNumber'); }
    onSubmit() {
        this.submitted = true;
        let trialArray = new Array();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } else {

            if (this.loginForm.controls.password.value == this.loginForm.controls.cpassword.value){
               this.signUp.signupObj.firstname = this.loginForm.controls.username.value;
               this.signUp.signupObj.email = this.loginForm.controls.email.value;
               this.signUp.signupObj.password =this.loginForm.controls.password.value;
               this.signUp.signupObj.roleId = 1;
               this.signUp.signupObj.stateId = 1 ;
               this.signUp.signupObj.mobile = this.loginForm.controls.mobileNumber.value;
               console.log(this.signUp.signupObj);
               this.signUp.signUpUser().subscribe (resp => {
               this.signUpArray.push(resp);
            //    this.signUpArray.forEach(element => {
            //          console.log('the change  is', this.signUpArray);
            //          });
                     this.router.navigate(['/dashboard/main']);
                 },
                 ( error ) => {
                                console.log('The error is', error.error.message);
                                this.msg= error.error.message;
                                alert(this.msg);
                             }
                 );
              //console.log('The error message to user is',this.msg);
        }

        }


    }
}
