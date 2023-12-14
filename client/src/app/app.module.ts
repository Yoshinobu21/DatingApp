

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 78b2622e97bf94603f722434319ef497f1aad0d8
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    HttpClientModule
    
=======
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
>>>>>>> 78b2622e97bf94603f722434319ef497f1aad0d8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
