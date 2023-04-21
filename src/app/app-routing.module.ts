import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Component1Component} from "./components/user-comp/component1.component";
import {LoginCompComponent} from "./components/login-comp/login-comp.component";
import {AdminCompComponent} from "./components/admin-comp/admin-comp.component";
import {ReviewCompComponent} from "./components/review-comp/review-comp.component";
import {OrderCompComponent} from "./components/order-comp/order-comp.component";
import {CartCompComponent} from "./components/cart-comp/cart-comp.component";
import {DoneCompComponent} from "./components/done-comp/done-comp.component";
import {SignInCompComponent} from "./components/register-comp/sign-in-comp.component";

const routes: Routes = [{path: 'all', component: Component1Component},
                        {path: '', component: LoginCompComponent},
                        {path:'admin',component:AdminCompComponent} ,
                        {path:'reviews',component:ReviewCompComponent},
                        {path: 'orders', component: OrderCompComponent},
                        {path: 'cart', component: CartCompComponent},
                        {path: 'done', component: DoneCompComponent},
                        {path: 'sign', component: SignInCompComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
