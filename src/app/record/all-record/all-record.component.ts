import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-all-record',
  templateUrl: './all-record.component.html',
  styleUrls: ['./all-record.component.sass']
})
export class AllRecordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable({

      "ajax": {
        "url": "assets/data/patients.json"
      },
      "columns": [
       
        { "data": "name" },
        { "data": "sex" },
        { "data": "bDate" },
        { "data": "treatment" },
        {
          "data": "action", "render": function (data) {
            return '<button class="btn tblActnBtn"><i class="material-icons">local_see</i></button><button class="btn tblActnBtn"><i class="material-icons">note_add</i></button><button class="btn tblActnBtn"><i class="material-icons">delete</i></button>'
          }
        },

      ]
    });
  }

}
