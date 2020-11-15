import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-home',
  templateUrl: './invoices-home.component.html',
  styleUrls: ['./invoices-home.component.css']
})
export class InvoicesHomeComponent implements OnInit {
  data=[{project:'HashText',  invstatus:'Not Done', invoiceno:"0012", name: 'Robin Williams'},
  {project:'SchoolRecords',  invstatus:'Done',invoiceno:"0013-1", name: 'CK Kumar'},
  {project:'SchoolRecords',  invstatus:'Done',invoiceno:"0013-2", name: 'CK Kumar'},
  {project:'SchoolRecords',  invstatus:'Done',invoiceno:"0013-3", name: 'CK Kumar'},
  {project:'SchoolRecords',  invstatus:'Done',invoiceno:"0013-4", name: 'CK Kumar'},
  {project:'InvoiceApp',  invstatus:'Not Done', invoiceno:"0014", name: 'SJ Lloyd'},
  {project:'Cricket Score Website', invstatus:'Not Done', invoiceno:"0015", name: 'Farukh Siddiqui'},
  {project:'Educational Website', invstatus:'Done', invoiceno:"0016-1", name: 'Farukh Siddiqui'},
  {project:'Educational Website', invstatus:'Done', invoiceno:"0016-2", name: 'Farukh Siddiqui'},
  {project:'Educational Website', invstatus:'Done', invoiceno:"0016-3", name: 'Farukh Siddiqui'},
  {project:'E-Commerce',  invstatus:'Done', invoiceno: '0017-1', name: 'Ryan Smith'},
  {project:'Gaming Portal',  invstatus:'Not Done', invoiceno:"0018", name: 'Steven Harper'}
  ];

  headers=[{key:'project', label:'Project Name'},
  {key:'invstatus', label:'Invoice Status'},
  {key:'invoiceno', label:'Invoice Number'},
  {key:'name', label:'Client Name'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
