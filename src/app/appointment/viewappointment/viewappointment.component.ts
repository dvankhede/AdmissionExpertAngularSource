import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.sass']
})
export class ViewappointmentComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
    $('#example').DataTable({

      "ajax": {
        "url": "assets/data/appointment.json"
      },
      "columns": [
        
        { "data": "name" },
        { "data": "email" },
        { "data": "date-of-appointment" },
        { "data": "time" },
        { "data": "mobile" },
        { "data": "doctor" },
        { "data": "injury" },
        {
          "data": "action", "render": function (data) {
            return '<button class="btn tblActnBtn"><i class="material-icons">mode_edit</i></button><button class="btn tblActnBtn"><i class="material-icons">delete</i></button>'
          }
        },

      ]
    });
  }
}

