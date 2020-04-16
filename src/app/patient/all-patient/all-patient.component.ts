import { Component, OnInit } from '@angular/core';
import { AllPatientService } from 'src/app/services/all-patient.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { EditPatientService } from 'src/app/services/edit-patient.service';
import { error } from 'protractor';
import { empty } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrls: ['./all-patient.component.sass']
})
export class AllPatientComponent implements OnInit {
id = 1;
  constructor(private allPatient: AllPatientService,
              private route: Router) { }
  ngOnInit() {
    this.patientDetail()
   
   // this.patientDetail();
  }

  renderTable(){
   var table= $('#example').DataTable({

      data:this.allPatient.AllPatientArray,
      rowId:"id",
      "columns": [
        // {
        //   "data": "img", "render": function (data) {
        //     return '<div class="table-img"><img src="' + data + '"/></div>'
        //   }
        // },
        { "data": "fullName" },
        { "data": "gender" },
        { "data": "email" },
        { "data": "mobile" },
        //  { "data": "dateOfBirth" },
        // { "data": "age" },
        {
          "data": "action", "render": function (data) {
            return '<button class="btn tblActnBtn editPatientButton"  ><i class="material-icons">mode_edit</i></button><button class="btn tblActnBtn"><i class="material-icons">delete</i></button><button class="btn tblActnBtn"><i class="material-icons">assignment</i></button>'
          }
        },

      ]
    });

   let that = this;
   $('.editPatientButton' ).click(function(ev) {
      let id = $(ev.target).parent().parent().parent().attr('id');
      that.editPatient(id);
    });
  }
  editPatient(id: number){
    alert('edit your patient with id' + id);
    this.allPatient.selectedpatientId = id;
   // this.allPatient.editPatient(this.allPatient.selectedpatientId).subscribe(res => {
      this.route.navigate(['patient/edit-patient']);
    // //  console.log(res)},
    //   ( error ) => console.log(error),
    // )
}
patientDetail(){
  this.allPatient.getAllPatientDetail()
  .subscribe(data => {
    let d:any=(data as any);
    let content:any=d.content;
    this.allPatient.AllPatientArray=[];
    for (const d of (content)) {
      let patient: any={ 
        id:d.id,
        fullName: d.fullName,
        email:d.email,
        mobile:d.mobile,
        address:d.address,
        city:d.city,
        dateOfBirth:d.dateOfBirth,
        age:d.age,
        gender:d.gender,
        roleVO:d.roleVO,
        stateVO:d.stateVO
      //  currentStatus: JSON.parse(d.currentStatus),
       }
      this.allPatient.AllPatientArray.push(patient);
      //  console.log('the role and state  data is', patient.roleVO.firstName);
            }
    console.log('the service array is ', this.allPatient.AllPatientArray);
    this.renderTable();
     }); 
    }
  }

