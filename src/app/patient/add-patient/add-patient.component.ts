import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { AddPatientService } from 'src/app/services/add-patient.service';
import { environment } from 'src/environments/environment';

declare const $: any;
declare const M: any;
declare const flatpickr: any;


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.sass']
})
export class AddPatientComponent implements OnInit {
  basicForm: FormGroup;
  submitted: boolean = false;
  patientDetailArray = new Array();
  castCategory = [];
  state = [];
  city = [];
  dateOfBirth: Date;
  msg: string;

  // dragdrop file upload
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 10,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService,
    private formBuilder: FormBuilder,
    private addPatientService: AddPatientService) { 
    }

  ngOnInit() {
    // this.basicForm = new FormGroup({
    // });
    this.basicForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      casteCategoryId: ['', Validators.required],
      stateId: ['', Validators.required],
      cityId: ['', Validators.required],
      dateOfBirth: [''],
      pcbPercentage: ['', Validators.required],
      neetScore: ['', Validators.required],
      allIndiaRank: ['', Validators.required],
      stateRank: ['', Validators.required],
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      email: [' ']
    });


    this.startScript();
    this.getCategoryList();
    this.getStateList();
    this.getCityList();

    console.log("start ngInit")

    // for labels overlapping prefilled content on floating label textitem
    M.updateTextFields();
  }
  get f() { return this.basicForm.controls; }
  get primEmail() { return this.basicForm.get('email'); }
  get mobNumber() { return this.basicForm.get('mobile') };


  onSubmit() {
    console.log(this.basicForm.value);
    this.submitted = true;
    if (this.basicForm.invalid) {
      alert('Invalid');
      this.findInvalidControls();
      return;
    } else {
      if (this.basicForm.valid) {
        alert('successfull !!!!');
        // console.log('Valid?', this.basicForm.valid); // true or false
        //   this.addPatientService.addUser.fullName = this.basicForm.controls.fullName.value;
        //   this.addPatientService.addUser.gender = this.basicForm.controls.gender.value;
        //   this.addPatientService.addUser.dateOfBirth = this.basicForm.controls.dateOfBirth.value;
        //   this.addPatientService.addUser.age = this.basicForm.controls.age.value;
        //   this.addPatientService.addUser.mobile = this.basicForm.controls.mobile.value;
        //   this.addPatientService.addUser.email =  this.basicForm.controls.email.value;
        //  this.addPatientService.addUser.pcbPercentage = this.basicForm.controls.pcbPercentage.value;
        //  this.addPatientService.addUser.neetScore = this.basicForm.controls.neetScore.value;
        // this.addPatientService.addUser.allIndiaRank = this.basicForm.controls.allIndiaRank.value ;
        // this.addPatientService.addUser.stateRank = this.basicForm.controls.stateRank.value;
        // this.addPatientService.addUser.casteCategoryId =this.basicForm.controls.castCategory.value;
        // this.addPatientService.addUser.stateId =this.basicForm.controls.state.value;
        // this.addPatientService.addUser.cityId =this.basicForm.controls.city.value;

        console.log('THe info is', this.addPatientService.addUser);
        this.findInvalidControls();
        this.addPatientService.addPatientDetail(this.basicForm.value).subscribe(resp => {
          this.patientDetailArray.push(resp);
          this.patientDetailArray.forEach(element => {
            console.log('the change  is', this.patientDetailArray);
          });

        },
          (error) => {
            console.log('The error is', error.error.message);
            this.msg = error.error.message;
            alert(this.msg);
          }
        );
      }

    }

  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.basicForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log('Error in', invalid);
      }
    }

    return invalid;
  }
  async startScript() {
    await this.dynamicScriptLoader.load('form.min').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }
  private loadData() {
    
    $('select').formSelect();
    flatpickr("#myDatePicker", {
      "dateFormat": "n-j-Y",
      "allowInput": true,
      "onOpen": function (selectedDates, dateStr, instance) {
        instance.setDate(instance.input.value, false);
      }
    });
    flatpickr("#myDatePicker2", {
      "dateFormat": "n-j-Y",
      "allowInput": true,
      "onOpen": function (selectedDates, dateStr, instance) {
        instance.setDate(instance.input.value, false);
      }
    });
    flatpickr("#myDatePicker3", {
      "dateFormat": "n-j-Y",
      "allowInput": true,
      "onOpen": function (selectedDates, dateStr, instance) {
        instance.setDate(instance.input.value, false);
      }
      
    });

    flatpickr("#myDateTimePicker", {
      "dateFormat": "n-j-Y H:i",
      "enableTime": true,
      "allowInput": true
    });

   
  }
  //   calculateAge() { // birthday is a date
  //     console.log(this.basicForm.controls.dateOfBirth.value);
  //     const dateOfBirth: Date = new Date(this.basicForm.controls.dateOfBirth.value);
  //     const ageDifMs = Date.now() - dateOfBirth.getTime();
  //     const ageDate = new Date(ageDifMs); // miliseconds from epoch

  //     this.basicForm.controls.age.setValue(Math.abs(ageDate.getUTCFullYear() - 1970));

  //     // return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }

  getCategoryList() {
    this.addPatientService.getCategoryList().subscribe((res: any) => {
      this.castCategory = res;
      console.log("Category Information", this.castCategory);
    },
      (err: any) => {
        console.log(err);
      })
  }
  getStateList() {
    this.addPatientService.getStateList().subscribe((res: any) => {
      this.state = res;
      console.log("state Information", this.state);

    },
      (err: any) => {
        console.log(err);
      })
  }

  getCityList() {
    this.addPatientService.getCityList().subscribe((res: any) => {
      this.city = res;
      console.log("city Information", this.city);
    },
      (err: any) => {
        console.log(err);
      })
  }

}
