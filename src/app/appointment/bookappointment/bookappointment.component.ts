import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.sass']
})
export class BookappointmentComponent implements OnInit {

  basicForm: FormGroup;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.basicForm = new FormGroup({
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
