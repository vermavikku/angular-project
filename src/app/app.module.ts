import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerAuthComponent,
    HomeComponent,
    SellerHomeComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
     FormsModule,
     HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
