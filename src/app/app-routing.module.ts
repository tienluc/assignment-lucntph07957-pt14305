import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './client/about/about.component';
import { IndexclientComponent } from './client/indexclient/indexclient.component';

import { ProductManagerComponent } from './client/product-manager/product-manager.component';




const routes: Routes = [
  { path: '', redirectTo: 'client/about', pathMatch: 'full'},
  {path: 'client', component: IndexclientComponent,
  children:[
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'manager', component: ProductManagerComponent},
  ]
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
