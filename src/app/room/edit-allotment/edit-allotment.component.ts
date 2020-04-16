import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;

@Component({
  selector: 'app-edit-allotment',
  templateUrl: './edit-allotment.component.html',
  styleUrls: ['./edit-allotment.component.sass']
})
export class EditAllotmentComponent implements OnInit {
  roomTypes = [{ id: 1, desc: 'General' }, { id: 2, desc: 'Delux' }, { id: 3, desc: 'Super Delux' }, { id: 4, desc: 'Special' }];

  dummyData = [{
    roomNo: '10',
    patientName: 'Sarah Smith',
    allotmentDate: '9/25/2019',
    dischargetDate: '09/30/2019.',
  }
  ]

  basicForm: FormGroup;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder) {
    this.basicForm = this.fb.group({
      roomNo: new FormControl(),
      patientName: new FormControl(),
      room: new FormControl(),
      allotmentDate: new FormControl(),
      dischargetDate: new FormControl()
    });

    this.basicForm.patchValue({
      roomNo: this.dummyData[0].roomNo,
      patientName: this.dummyData[0].patientName,
      allotmentDate: this.dummyData[0].allotmentDate,
      dischargetDate: this.dummyData[0].dischargetDate
    });
    this.basicForm.controls['room'].setValue(this.roomTypes[2], { onlySelf: true });

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
    M.updateTextFields();
  }
}
