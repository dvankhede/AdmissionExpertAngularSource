import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalService } from '../services/hospital.service';



@NgModule({
  declarations: [AddHospitalComponent ],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule
  ],
  providers: [
    HospitalService
  ]
})
export class HospitalModule { }
