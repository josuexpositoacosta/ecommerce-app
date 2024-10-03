
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../servicios/carrito/cart.service';
import { Product } from '../../modelos/product.model';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CanComponentDeactivate } from '../../servicios/guards/can-deactivate.guard';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
     
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, CanComponentDeactivate {
  cartProducts$!: Observable<Product[]>;
removeFromCart: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProducts$ = this.cartService.getCartProducts();
  }


  canDeactivate(): boolean {
    return confirm('¿Estás seguro de que quieres salir? Se perderán los cambios.');
  }

}
