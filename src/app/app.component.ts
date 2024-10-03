import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { cartReducer } from './estados/cart.reducer'; // 


import { ErrorInterceptorService, JwtInterceptorService } from './servicios/service.index';
import { VisitCounterComponent } from "./componentes/visit-counter/visit-counter.component";
import { LoginComponent } from "./auth/login/login.component";
import { ClickLoggerDirective } from './directivas/click-logger.directive';
import { TooltipComponent } from './componentes/tooltip/tooltip.component';
import { CustomHeaderInterceptor } from './servicios/inter/header/custom.interceptor';
import { NotificationComponent } from './componentes/notification/notification.component';
import { CartComponent } from './componentes/cart/cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ClickLoggerDirective,

    TooltipComponent,

    VisitCounterComponent,
    LoginComponent,
    
    NotificationComponent,

    CartComponent,

  
   
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule, 
    
    
],
  providers: [    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHeaderInterceptor,
      multi: true
    },

    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-app';
}
