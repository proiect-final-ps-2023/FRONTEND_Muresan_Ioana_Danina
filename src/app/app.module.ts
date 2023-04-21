import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { Component1Component } from './components/user-comp/component1.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import {FormsModule} from "@angular/forms";
import { AdminCompComponent } from './components/admin-comp/admin-comp.component';
import { ReviewCompComponent } from './components/review-comp/review-comp.component';
import { OrderCompComponent } from './components/order-comp/order-comp.component';
import { CartCompComponent } from './components/cart-comp/cart-comp.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoneCompComponent } from './components/done-comp/done-comp.component';
import { SignInCompComponent } from './components/register-comp/sign-in-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    LoginCompComponent,
    AdminCompComponent,
    ReviewCompComponent,
    OrderCompComponent,
    CartCompComponent,
    DoneCompComponent,
    SignInCompComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
