import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';


const routes: Routes = [
  {
    path: 'all-staff',
    component: AllStaffComponent
  },
  {
    path: 'add-staff',
    component: AddStaffComponent
  },
  {
    path: 'edit-staff',
    component: EditStaffComponent
  },
  {
    path: 'staff-profile',
    component: StaffProfileComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
