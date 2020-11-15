import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-home',
  templateUrl: './clients-home.component.html',
  styleUrls: ['./clients-home.component.css']
})
export class ClientsHomeComponent implements OnInit {
  data=[{name: 'Robin Williams', country: 'Australia', subdate:'15/08/2019'},
  {name: 'CK Kumar', country: 'India', subdate:'18/05/2018'},
  {name: 'SJ Lloyd', country: 'Jamaica', subdate:'05/04/2020'},
  {name: 'Farukh Siddiqui', country: 'UAE', subdate:'25/07/2018'},
  {name: 'Ryan Smith', country: 'Canada', subdate:'12/10/2020'},
  {name: 'Steven Harper', country: 'USA', subdate:'11/08/2019'}
  ];

  headers=[{key:'name', label:'Client Name'},
  {key:'country', label:'Country'},
  {key:'subdate', label:'Last Project Submission on:'}
  ];

  
  constructor() { }

  ngOnInit(): void {
  }
 
}
