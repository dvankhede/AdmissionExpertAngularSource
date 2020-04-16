import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { AllRecordComponent } from './all-record/all-record.component';


const routes: Routes = [{
  path: 'all-record',
  component: AllRecordComponent
},
{
  path: 'add-record',
  component: AddRecordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordRoutingModule { }
