import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StaffRoutingModule } from './staff-routing.module';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStaffComponent } from './edit-staff/edit-staff.component';




@NgModule({
  declarations: [AddStaffComponent, StaffProfileComponent, AllStaffComponent, EditStaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule
  ]
})
export class StaffModule { }
