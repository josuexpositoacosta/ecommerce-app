
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
   ProductoService,

  ErrorInterceptorService,
  JwtInterceptorService,
  LoginService,
  UserService,
  LoginGuardService,
  SidebarService
  
 } from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],

  providers: [
    
    ProductoService,
    
    ErrorInterceptorService,
    JwtInterceptorService,
    LoginService,
    UserService,
    LoginGuardService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
