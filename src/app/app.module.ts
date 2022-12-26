import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './_components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './_pages/product/product.component';
import { HomeComponent } from './_pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
