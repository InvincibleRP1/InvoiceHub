import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoicedetailsComponent} from '../InvoiceDets/invoicedetails/invoicedetails.component'

const routes: Routes = [{path:'', component:InvoicedetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceDetsRoutingModule { }
