import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsHomeComponent} from './clients-home/clients-home.component'
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: '', component: ClientsHomeComponent, data:{breadcrumb:""}, children:[{path:'clients/details',component:DetailsComponent, data:{breadcrumb:"details"}}]

}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
