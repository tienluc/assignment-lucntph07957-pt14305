import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './client/about/about.component';
import { IndexclientComponent } from './client/indexclient/indexclient.component';
import { ProductListComponent } from './client/product-list/product-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full'},

  {path: 'client', component: IndexclientComponent,
  children:[
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ProductListComponent},
  
  ]
  },
  
  
  {path: 'admin', component: IndexAdminComponent,
  children:[
  {path: 'add', component: AddProductComponent},
     {path: 'edit', component: ProductEditComponent},
   
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
