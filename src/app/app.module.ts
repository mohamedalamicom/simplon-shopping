import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './_components/product-card/product-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductComponent } from './_pages/product/product.component';
import { HomeComponent } from './_pages/home/home.component';
import { AuthInterceptor } from './_intercptors/auth.interceptor';
import { UrlInterceptor } from './_intercptors/url.interceptor';
import { InternalServerHandler } from './_errorhandlers/InternalServer.handler';


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
  providers: [
    { provide: ErrorHandler, useClass: InternalServerHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
