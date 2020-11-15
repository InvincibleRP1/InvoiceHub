import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceDetsRoutingModule } from './invoice-dets-routing.module';
import {InvoicedetailsComponent} from '../InvoiceDets/invoicedetails/invoicedetails.component'


@NgModule({
  declarations: [InvoicedetailsComponent],
  imports: [
    CommonModule,
    InvoiceDetsRoutingModule
  ]
})
export class InvoiceDetsModule { }
