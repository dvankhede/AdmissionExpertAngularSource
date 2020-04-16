import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { EditPatientService } from 'src/app/services/edit-patient.service';
import { AllPatientService } from 'src/app/services/all-patient.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AddPatientService } from 'src/app/services/add-patient.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.sass']
})
export class EditPatientComponent implements OnInit {
  genderArray = [];
  maritalStatus = [];
  castCategory=[];
  state=[];
  city=[];
  
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 10,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };

  basicForm: FormGroup;
   data: any;
   updateDataArray = new Array();
  updateObj: any = {id:'',fullName: '',gender: '' , email: '',mobile: '',stateId:'',
  casteCategoryId:'',cityId:'',pcbPercentage:'',neetScore:'',allIndiaRank:'',stateRank:'',};
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService,
              private fb: FormBuilder, private allPatient: AllPatientService,
              private route: Router,
              private addPatientService: AddPatientService
              ) {
                alert('now in edit ' + this.allPatient.selectedpatientId);
                this.basicForm = this.fb.group({
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      casteCategoryId: ['', Validators.required],
      stateId:['', Validators.required],
      cityId: ['', Validators.required],
      pcbPercentage:['', Validators.required],
      neetScore:['', Validators.required],
      allIndiaRank:['', Validators.required],
      stateRank:['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      mobile: ['', Validators.required],
      myDatePicker: ['', Validators.required],
      
    });
  }
  ngOnInit() {
    this.startScript();
    this.getCategoryList();
    this.getStateList();
    this.getCityList();
        
    this.allPatient.editPatient(this.allPatient.selectedpatientId)
    .subscribe((resp :any) => { console.log(resp);

                        this.basicForm = this.fb.group({
                          fullName : [resp.fullName, Validators.required],
                          myDatePicker : [resp.dateOfBirth, Validators.required],
                          gender : [resp.gender, Validators.required],
                          casteCategoryId:[resp.casteCategoryId, Validators.required],
                          stateId:[resp.stateId, Validators.required],
                          cityId:[resp.cityId, Validators.required],
                          pcbPercentage:[resp.pcbPercentage, Validators.required],
                          neetScore:[resp.neetScore, Validators.required],
                          allIndiaRank:[resp.allIndiaRank, Validators.required],
                          stateRank:[resp.stateRank, Validators.required],
                         mobile : [resp.mobile, Validators.required],
                         email : [resp.email, Validators.required],
                        
                        });
                 
                        console.log('The date is', this.basicForm.controls.myDatePicker.value);
                        console.log('The marital status is', this.basicForm.controls.maritalStatus.value);
                        //console.log('the gender is',this.basicForm.controls.gender.value);
                        this.genderArray.push(this.basicForm.controls.gender.value);
                       // this.maritalStatus.push(this.basicForm.controls.maritalStatus.value);not in swagger
                        console.log('The gender vanlue in array is', this.genderArray);
                       },
      ( error ) => console.log(error), 
            );  
   
  }

  onSubmit(form: FormGroup) {
   // console.log('Valid?', form.valid); // true or false
    if (this.basicForm.invalid) {
      alert('Form not valid');
      return ;
    } else {
      alert('Form is valid');
      // console.log('the is is',this.allPatient.selectedpatientId);
      // this.updateObj.id = this.allPatient.selectedpatientId;
      // this.updateObj.fullName = this.basicForm.controls.fullName.value;
      // this.updateObj.gender = this.basicForm.controls.gender.value;
      // this.updateObj.email = this.basicForm.controls.email.value;
      // this.updateObj.casteCategoryId = this.basicForm.controls.casteCategoryId.value;
      // this.updateObj.stateId = this.basicForm.controls.stateId.value;
      // this.updateObj.cityId = this.basicForm.controls.cityId.value;
      // this.updateObj.pcbPercentage = this.basicForm.controls.pcbPercentage.value;
      // this.updateObj.mobile = this.basicForm.controls.mobile.value;
      // this.updateObj.neetScore = this.basicForm.controls.neetScore.value;
      // this.updateObj.myDatePicker = this.basicForm.controls.myDatePicker.value;
      // this.updateObj.allIndiaRank = this.basicForm.controls.allIndiaRank.value;
      // this.updateObj.stateRank = this.basicForm.controls.stateRank.value;
     // this.updateDataArray.push(this.data);
    //  this.updateObj = this.data;
      // console.log('the obj ',this.updateObj);
      // console.log('the data Array is bvefore',this.updateDataArray);
      
      this.allPatient.updatePatientDetail(this.basicForm.value,this.allPatient.selectedpatientId)
      .subscribe(res => {console.log(res);
                          alert('Submitted SuccessFully');
                          // this.route.navigate(['patient/all-patient'])
                      },
                (error) => console.log(error),
                );
    }

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
      "dateFormat": "n/j/Y",
      "allowInput": true,
      "onOpen": function (selectedDates, dateStr, instance) {
        instance.setDate(instance.input.value, false);
      }
    });
    flatpickr("#myDatePicker3", {
      "dateFormat": "n/j/Y",
      "allowInput": true,
      "onOpen": function (selectedDates, dateStr, instance) {
        instance.setDate(instance.input.value, false);
      }
    });

    flatpickr("#myDateTimePicker", {
      "dateFormat": "n/j/Y H:i",
      "enableTime": true,
      "allowInput": true
    });

    M.updateTextFields();
  }

  getCategoryList()
{
  this.addPatientService.getCategoryList().subscribe((res:any)=>{
    this.castCategory=res;
    console.log(this.castCategory);
  },
  (err:any)=>{
    console.log(err);
  })
}
getStateList()
{
  this.addPatientService.getStateList().subscribe((res:any)=>{
    this.state=res;
    console.log(this.state);
  },
  (err:any)=>{
    console.log(err);
  })
}

getCityList()
{
  this.addPatientService.getCityList().subscribe((res:any)=>{
    this.city=res;
    console.log(this.city);

  },
  (err:any)=>{
    console.log(err);
  })
}
}
