import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AllDoctorComponent } from './all-doctor/all-doctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';



@NgModule({
  declarations: [AddDoctorComponent, AllDoctorComponent, DoctorProfileComponent, EditDoctorComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule
  ]
})
export class DoctorsModule { }
