import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicedetailsComponent } from '../InvoiceDets/invoicedetails/invoicedetails.component';
import {InvoicesHomeComponent} from './invoices-home/invoices-home.component'

const routes: Routes = [{path:'',component:InvoicesHomeComponent, data: {breadcrumb:"invoices"}, 
children:[{path:'invoices/:invoice-dets',component:InvoicedetailsComponent, data: {breadcrumb:"invoice-dets"}}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
