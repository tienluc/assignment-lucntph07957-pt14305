import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './client/about/about.component';
import { IndexclientComponent } from './client/indexclient/indexclient.component';
import { ProductListComponent } from './client/product-list/product-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { ChartComponent } from './admin/chart/chart.component';


const routes: Routes = [
  
  {path: 'client', component: IndexclientComponent,
  children:[
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ProductListComponent},
    {path: 'product/:productID', component: ProductDetailComponent},
  
  ]
  },
  
  { path: '', redirectTo: 'client', pathMatch: 'full'},
  {path: 'admin', component: IndexAdminComponent,
  children:[
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'add', component: AddComponent},
    {path: 'edit', component: ProductEditComponent},
    {path: 'list', component: ProductManagerComponent},
    {path: 'list/edit/:productID', component: ProductEditComponent},
    {path: 'charts', component: ChartComponent},

   
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
