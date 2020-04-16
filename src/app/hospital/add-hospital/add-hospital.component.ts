import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormControl, Validators, RequiredValidator, AbstractControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { Hospital } from '../hospital';
import { StateService } from 'src/app/services/state.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.sass',]
})
export class AddHospitalComponent implements OnInit {

  basicForm: FormGroup;
  states:any;

  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private hospitalService: HospitalService,
    private stateService: StateService) { }

  ngOnInit() {
    console.log("start sttt");
    this.stateService.getAllState().subscribe(
      (ref) => {
        //alert();
        this.states=ref
      }
      );
    

     
    this.basicForm = new FormGroup({
      hnameControl: new FormControl('', Validators.required),
      addressControl: new FormControl('', Validators.maxLength(120)),
      cityControl: new FormControl('', Validators.required),
      zipcodeControl: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
         stateIdControl: new FormControl('')   
    });
    this.startScript();

    // for labels overlapping prefilled content on floating label textitem
    M.updateTextFields();
  }

  async startScript() {
    await this.dynamicScriptLoader.load('form.min').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData() {
    $('select').formSelect();
  }

  isValid: boolean;

  onSubmit(basicForm: FormGroup) {
    let controls: Object = basicForm.controls;

    console.log(basicForm)

    if (basicForm.valid) {
      console.log('isValid if block:' + basicForm.valid); // true or false
      let hospital = new Hospital(
        basicForm.get('hnameControl').value,
        basicForm.get('addressControl').value,
        basicForm.get('cityControl').value,
        basicForm.get('zipcodeControl').value,
        this.basicForm.get('stateIdControl').value
      );

      this.hospitalService.addHospital(hospital).subscribe((ref) => {console.log(ref)});
      console.log('if end here');
    } else {
      console.log('isValid else block:' + basicForm.valid); // true or false

      basicForm.markAllAsTouched();
      basicForm.markAsDirty();

      //[disabled]="basicForm.invalid"
    }

  }


test(){
  console.log(this.states);

}

}