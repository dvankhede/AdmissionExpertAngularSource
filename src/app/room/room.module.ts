import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoomRoutingModule } from './room-routing.module';
import { AllotedRoomComponent } from './alloted-room/alloted-room.component';
import { NewAllotmentComponent } from './new-allotment/new-allotment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAllotmentComponent } from './edit-allotment/edit-allotment.component';



@NgModule({
  declarations: [AllotedRoomComponent, NewAllotmentComponent, EditAllotmentComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
