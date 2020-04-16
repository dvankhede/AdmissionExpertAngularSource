import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-all-payment',
  templateUrl: './all-payment.component.html',
  styleUrls: ['./all-payment.component.sass']
})
export class AllPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable({

      "ajax": {
        "url": "assets/data/payment.json"
      },
      "columns": [
        { "data": "bNo" },
        { "data": "pName" },
        { "data": "dName" },
        { "data": "date" },
        { "data": "charges" },
        { "data": "tax" },
        { "data": "disc" },
        { "data": "total" },
        {
          "data": "action", "render": function (data) {
            return '<button class="btn tblActnBtn"><i class="material-icons">mode_edit</i></button><button class="btn tblActnBtn"><i class="material-icons">delete</i></button>'
          }
        },

      ]
    });
  }

}
