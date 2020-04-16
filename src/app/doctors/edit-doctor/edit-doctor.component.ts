import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.sass']
})
export class EditDoctorComponent implements OnInit {

  genderTypes = [{ id: 1, desc: 'Male' }, { id: 2, desc: 'Female' }];
  departmentTypes = [{ id: 1, desc: 'Neurology' }, { id: 2, desc: 'Orthopedics' }, { id: 3, desc: 'Gynaecology' }, { id: 4, desc: 'Microbiology' }];

  dummyData = [{
    fname: 'Daenarys',
    lname: 'Targaryen',
    email: 'test@email.com',
    pass: '12345',
    cpass: '12345',
    desig: 'Director',
    address: '25, H.N Street, 368587',
    mobile: '123456789',
    myDatePicker: '9/25/2019',
    education: 'M.B.B.S.',
  }
  ]

  // dragdrop file upload
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 10,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };

  basicForm: FormGroup;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder) {
    this.basicForm = this.fb.group({
      fname: new FormControl(),
      lname: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      pass: new FormControl(),
      cpass: new FormControl(),
      desig: new FormControl(),
      department: new FormControl(),
      address: new FormControl(),
      mobile: new FormControl(),
      myDatePicker: new FormControl(),
      education: new FormControl()
    });

    this.basicForm.patchValue({
      fname: this.dummyData[0].fname,
      lname: this.dummyData[0].lname,
      email: this.dummyData[0].email,
      pass: this.dummyData[0].pass,
      cpass: this.dummyData[0].cpass,
      desig: this.dummyData[0].desig,
      address: this.dummyData[0].address,
      mobile: this.dummyData[0].mobile,
      myDatePicker: this.dummyData[0].myDatePicker,
      education: this.dummyData[0].education
    });
    this.basicForm.controls['gender'].setValue(this.genderTypes[0], { onlySelf: true });
    this.basicForm.controls['department'].setValue(this.departmentTypes[2], { onlySelf: true });

  }
  ngOnInit() {
    this.startScript();
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
  }
  async startScript() {
    await this.dynamicScriptLoader.load('form.min').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }
  private loadData() {

    $('select').formSelect();

    flatpickr("#myDatePicker", {
      "dateFormat": "n/j/Y",
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
}
