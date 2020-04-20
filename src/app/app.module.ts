import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProductListComponent } from './client/product-list/product-list.component';
import { SliderComponent } from './slider/slider.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './client/about/about.component';
import { IndexclientComponent } from './client/indexclient/indexclient.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './client/product-detail/product-detail.component';
import { ChartComponent } from './admin/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ProductListComponent,
    SliderComponent,
    ProductManagerComponent,
    AboutComponent,
    IndexclientComponent,
    IndexAdminComponent,
    AddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
