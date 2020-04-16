import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.sass']
})
export class AllStaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable({

      "ajax": {
        "url": "assets/data/staff.json"
      },
      "columns": [
        // {
        //   "data": "img", "render": function (data) {
        //     return '<div class="table-img"><img src="' + data + '"/></div>'
        //   }
        // },
        { "data": "name" },
        { "data": "designation" },
        { "data": "mobile" },
        { "data": "email" },
        { "data": "address" },
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
