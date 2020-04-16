import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllotedRoomComponent } from './alloted-room/alloted-room.component';
import { NewAllotmentComponent } from './new-allotment/new-allotment.component';
import { EditAllotmentComponent } from './edit-allotment/edit-allotment.component';


const routes: Routes = [{
  path: 'alloted-rooms',
  component: AllotedRoomComponent
},
{
  path: 'new-allotment',
  component: NewAllotmentComponent
},
{
  path: 'edit-allotment',
  component: EditAllotmentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
