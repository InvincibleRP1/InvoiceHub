import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'clients', loadChildren: () => import('../app/clients/clients.module').then(m => m.ClientsModule), data: { breadcrumb: "clients" } },
  { path: 'projects', loadChildren: () => import('../app/projects/projects.module').then(m => m.ProjectsModule), data: { breadcrumb: "projects" }  },
  { path: 'invoices', loadChildren: () => import('../app/invoices/invoices.module').then(m => m.InvoicesModule) , data: { breadcrumb: "invoices" } },
  { path: 'invoice-dets', loadChildren: () => import('../app/invoice-dets/invoice-dets.module').then(m => m.InvoiceDetsModule) , data: { breadcrumb: "invoice-dets" } },
  { path: '', component: HomeComponent , data: { breadcrumb: "home" } },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
