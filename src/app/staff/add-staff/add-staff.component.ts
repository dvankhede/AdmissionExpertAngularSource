import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.sass']
})
export class AddStaffComponent implements OnInit {

  basicForm: FormGroup;


  // dragdrop file upload
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 10,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.basicForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
    });
    this.startScript();

    // for labels overlapping prefilled content on floating label textitem
    M.updateTextFields();
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
  }


}
