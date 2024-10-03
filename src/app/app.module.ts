import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './estados/cart.reducer'; 

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    BrowserModule,
    StoreModule.forRoot({ cart: cartReducer }) 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}