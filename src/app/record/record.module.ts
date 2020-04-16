import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecordRoutingModule } from './record-routing.module';
import { AddRecordComponent } from './add-record/add-record.component';
import { AllRecordComponent } from './all-record/all-record.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddRecordComponent, AllRecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule
  ]
})
export class RecordModule { }
