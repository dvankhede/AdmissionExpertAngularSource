import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';


const routes: Routes = [
  {
    path: 'bookAppointment',
    component: BookappointmentComponent
  },
  {
    path: 'viewAppointment',
    component: ViewappointmentComponent
  },
  {
    path: 'edit-ppointment',
    component: EditAppointmentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
