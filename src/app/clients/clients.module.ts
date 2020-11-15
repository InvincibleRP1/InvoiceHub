import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsHomeComponent } from './clients-home/clients-home.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [ClientsHomeComponent, TableComponent, DetailsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
