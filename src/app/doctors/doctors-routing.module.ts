import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AllDoctorComponent } from './all-doctor/all-doctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';


const routes: Routes = [{
  path: 'add-doctor',
  component: AddDoctorComponent
},
{
  path: 'edit-doctor',
  component: EditDoctorComponent
},
{
  path: 'all-doctor',
  component: AllDoctorComponent
},
{
  path: 'doctor-profile',
  component: DoctorProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
