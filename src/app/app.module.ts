import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import { AppComponent } from "./app.component";

import { ProductListComponent } from "./client/product-list/product-list.component";
import { SliderComponent } from "./slider/slider.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { AboutComponent } from "./client/about/about.component";
import { IndexclientComponent } from "./client/indexclient/indexclient.component";
import { IndexAdminComponent } from "./admin/index-admin/index-admin.component";
import { ProductEditComponent } from "./admin/product-edit/product-edit.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductDetailComponent } from "./client/product-detail/product-detail.component";
import { ChartComponent } from "./admin/chart/chart.component";
import { AddProductComponent } from "./admin/add-product/add-product.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { BlogComponent } from "./client/blog/blog.component";
import { ContactComponent } from "./client/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,

    ProductListComponent,
    SliderComponent,
    ProductManagerComponent,
    AboutComponent,
    IndexclientComponent,
    IndexAdminComponent,

    ProductEditComponent,
    ProductDetailComponent,
    ChartComponent,
    AddProductComponent,
    NotfoundComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
