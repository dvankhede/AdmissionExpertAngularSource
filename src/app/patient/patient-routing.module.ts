import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllPatientComponent } from './all-patient/all-patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';


const routes: Routes = [{
  path: 'all-patient',
  component: AllPatientComponent
},
{
  path: 'add-patient',
  component: AddPatientComponent
},
{
  path: 'edit-patient',
  component: EditPatientComponent
},
{
  path: 'patient-profile',
  component: PatientProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
