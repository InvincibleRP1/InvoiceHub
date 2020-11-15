import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesHomeComponent } from './invoices-home/invoices-home.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [InvoicesHomeComponent, TableComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
