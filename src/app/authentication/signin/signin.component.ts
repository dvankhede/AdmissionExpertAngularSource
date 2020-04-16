import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'src/app/services/oauth.service';
import { Response } from '@angular/http';

declare const $: any;

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder,private _service:OAuthService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        //    [Focus input] * /
        $('.input100').each(function () {
            $(this).on('blur', function () {
                if ($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                }
                else {
                    $(this).removeClass('has-val');
                }
            })
        })
    }
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } else {
            this._service.obtainAccessToken(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value).subscribe(
                (response:Response) => {
                    const data=response.json();
                    this._service.saveToken(data);
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('loggedInEmail', this.loginForm.controls['username'].value);
                    this.router.navigate(['/dashboard/main']);
                  },
                (error) => console.log(error)
              )

            
        }


    }
}
