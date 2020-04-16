import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';



const routes: Routes = [{
  path: 'add-hospital', component: AddHospitalComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }









