import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';


@NgModule({
  declarations: [BookappointmentComponent, ViewappointmentComponent, EditAppointmentComponent],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule
  ]
})
export class AppointmentModule { }
