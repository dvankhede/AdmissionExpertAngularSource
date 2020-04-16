import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.sass']
})
export class EditAppointmentComponent implements OnInit {


  genderTypes = [{ id: 1, desc: 'Male' }, { id: 2, desc: 'Female' }];
  doctors = [{ id: 1, desc: 'DR. Rajesh' }, { id: 2, desc: 'DR. Sarah Smith' }, { id: 3, desc: 'DR. Jay Soni' }];

  dummyData = [{
    fname: 'Daenarys',
    lname: 'Targaryen',
    email: 'test@email.com',
    address: '25, H.N Street, 368587',
    mobile: '123456789',
    myDatePicker: '9/25/2019',
    theraphyDate: '9/25/2019',
    myDateTimePicker: '9/25/2019 13:25',
    injury: 'Fever',
    note: 'Templare was 105',
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
      department: new FormControl(),
      doctor: new FormControl(),
      address: new FormControl(),
      mobile: new FormControl(),
      myDatePicker: new FormControl(),
      myDateTimePicker: new FormControl(),
      theraphyDate: new FormControl(),
      injury: new FormControl(),
      note: new FormControl()
    });

    this.basicForm.patchValue({
      fname: this.dummyData[0].fname,
      lname: this.dummyData[0].lname,
      email: this.dummyData[0].email,
      address: this.dummyData[0].address,
      mobile: this.dummyData[0].mobile,
      myDatePicker: this.dummyData[0].myDatePicker,
      myDateTimePicker: this.dummyData[0].myDateTimePicker,
      theraphyDate: this.dummyData[0].theraphyDate,
      injury: this.dummyData[0].injury,
      note: this.dummyData[0].note
    });
    this.basicForm.controls['gender'].setValue(this.genderTypes[0], { onlySelf: true });
    this.basicForm.controls['doctor'].setValue(this.doctors[2], { onlySelf: true });

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
