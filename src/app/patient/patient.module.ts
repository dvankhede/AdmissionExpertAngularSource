import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllPatientComponent } from './all-patient/all-patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPatientComponent } from './edit-patient/edit-patient.component';


@NgModule({
  declarations: [AddPatientComponent, AllPatientComponent, PatientProfileComponent, EditPatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
