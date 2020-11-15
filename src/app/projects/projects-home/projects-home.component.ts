import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
  data=[{project:'HashText',  invstatus:'Not Done', name: 'Robin Williams'},
  {project:'SchoolRecords',  invstatus:'Done', name: 'CK Kumar'},
  {project:'InvoiceApp',  invstatus:'Not Done', name: 'SJ Lloyd'},
  {project:'Cricket Score Website',  invstatus:'Not Done', name: 'Farukh Siddiqui'},
  {project:'Educational Website',  invstatus:'Done', name: 'Farukh Siddiqui'},
  {project:'E-Commerce',  invstatus:'Done', name: 'Ryan Smith'},
  {project:'Gaming Portal',  invstatus:'Not Done', name: 'Steven Harper'}
  ];

  headers=[{key:'project', label:'Project Name'},
  {key:'invstatus', label:'Invoice Status'},
  {key:'name', label:'Client Name'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
