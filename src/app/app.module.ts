import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { SliderComponent } from './slider/slider.component';
import { ProductManagerComponent } from './client/product-manager/product-manager.component';
import { AboutComponent } from './client/about/about.component';
import { IndexclientComponent } from './client/indexclient/indexclient.component';



@NgModule({
  declarations: [
    AppComponent,
    
  
    SliderComponent,
    ProductManagerComponent,
    AboutComponent,
    IndexclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
