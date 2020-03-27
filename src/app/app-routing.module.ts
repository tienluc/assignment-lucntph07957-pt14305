import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';



const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'product', component: ProductListComponent},
  {path: 'manager', component: ProductManagerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
