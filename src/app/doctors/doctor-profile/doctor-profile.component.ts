import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.sass']
})
export class DoctorProfileComponent implements OnInit {

  basicForm: FormGroup;
  accountForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.basicForm = new FormGroup({
      username: new FormControl(''),
      curPassword: new FormControl(''),
      newPassword: new FormControl(''),
    });

    this.accountForm = new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl(''),
      city: new FormControl(''),
      email: new FormControl(''),
      country: new FormControl(''),
      address: new FormControl(''),
    });
  }
}
