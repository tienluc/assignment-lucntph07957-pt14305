import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './client/about/about.component';
import { IndexclientComponent } from './client/indexclient/indexclient.component';
import { ProductListComponent } from './client/product-list/product-list.component';
import { AddComponent } from './admin/add-product/add.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';



const routes: Routes = [
  
  {path: 'client', component: IndexclientComponent,
  children:[
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ProductListComponent},
  
  ]
  },
  
  { path: '', redirectTo: 'client', pathMatch: 'full'},
  {path: 'admin', component: IndexAdminComponent,
  children:[
    {path: 'add', component: AddComponent},
    
   
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
