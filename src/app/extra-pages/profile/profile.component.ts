import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProfileModel } from './profileModel.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  updateAccountForm: FormGroup;
   genderType: string;
  profModelObj: ProfileModel = new ProfileModel();
  selectedId;
  selectedGenderId;
  constructor(private profService: ProfileService,
              private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.updateAccountForm = new FormGroup({
      firstName: new FormControl(''),
      lastName:  new FormControl(''),
      email:  new FormControl(''),
      city:  new FormControl(''),
      address:  new FormControl(''),
      country:  new FormControl(''),
     });
    this.profService.getState().
      subscribe((res : any[]) =>{ console.log('The given state is', res),
      res.forEach(element => {
        this.profModelObj.stateArray.push(element);
      });                      },
              (error) => console.log('The error is', error),
                );
    // console.log('Now in model' , this.profModelObj.stateArray);
  }
  onChangeGender(event: Event){
    const selectedOptions = event.target['options'];
    this.selectedGenderId = selectedOptions.selectedIndex;
    this.genderType = selectedOptions[this.selectedGenderId].text;
    console.log('the value ', this.genderType);
  }
  onChange(event: Event){
  const selectedOptions = event.target['options'];
  this.selectedId = selectedOptions.selectedIndex;
// let selectElementText = selectedOptions[selecedId];
  console.log('the value ', this.selectedId);
  }
  saveAccountSetting(){
    this.profService.profUpdateObj.id = this.profService.profObj.id;
    this.profService.profUpdateObj.firstName =this.profModelObj.firstName;
    this.profService.profUpdateObj.lastName = this.profModelObj.lastName;
    this.profService.profUpdateObj.mobile = this.profModelObj.mobile;
    this.profService.profUpdateObj.email = environment.emailId;
    
    this.profService.profUpdateObj.address = this.profModelObj.address;
    this.profService.profUpdateObj.city = this.profModelObj.city;
    this.profService.profUpdateObj.zipcode = this.profModelObj.zipcode;
    this.profService.profUpdateObj.gender = this.genderType;
    this.profService.profUpdateObj.stateId = this.selectedId;
    console.log(this.profService.profUpdateObj);
    this.profService.updateProfileDetails(this.profService.profUpdateObj)
     .subscribe(res=>console.log('Response is',res),
                (error)=>console.log('Error is',error)
     );
  }
}
