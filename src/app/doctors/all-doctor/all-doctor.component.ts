import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.sass']
})
export class AllDoctorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable({

      "ajax": {
        "url": "assets/data/doctors.json"
      },
      "columns": [
        {
          "data": "img", "render": function (data) {
            return '<div class="table-img"><img src="' + data + '"/></div>'
          }
        },
        { "data": "name" },
        { "data": "department" },
        { "data": "specialization" },
        { "data": "degree" },
        { "data": "mobile" },
        { "data": "email" },
        { "data": "jdate" },
        {
          "data": "action", "render": function (data) {
            return '<button class="btn tblActnBtn"><i class="material-icons">mode_edit</i></button><button class="btn tblActnBtn"><i class="material-icons">delete</i></button>'
          }
        },

      ]
    });
  }

}
