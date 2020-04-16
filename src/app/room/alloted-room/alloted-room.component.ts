import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-alloted-room',
  templateUrl: './alloted-room.component.html',
  styleUrls: ['./alloted-room.component.sass']
})
export class AllotedRoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable({

      "ajax": {
        "url": "assets/data/rooms.json"
      },
      "columns": [
        {
          "data": "img", "render": function (data) {
            return '<div class="table-img"><img src="' + data + '"/></div>'
          }
        },
        { "data": "rNo" },
        { "data": "pName" },
        { "data": "rType" },
        { "data": "sex" },
        { "data": "aDate" },
        { "data": "dDate" },
        {
          "data": "action", "render": function (data) {
            return '<button class="btn tblActnBtn"><i class="material-icons">mode_edit</i></button><button class="btn tblActnBtn"><i class="material-icons">delete</i></button>'
          }
        },

      ]
    });
  }

}
