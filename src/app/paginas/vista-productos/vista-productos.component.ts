import { Component, OnInit } from '@angular/core';
import { agregarAlCarrito } from '../../estados/estado';

import { TarjetaProductoComponent } from "../tarjeta-producto/tarjeta-producto.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistaProductoService } from '../../servicios/service.index';
import { CartService } from '../../servicios/carrito/cart.service';
import { Product } from '../../modelos/product.model';

@Component({ 
  selector: 'app-lista-productos',
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TarjetaProductoComponent],
  templateUrl: './vista-productos.component.html',
  styleUrl: './vista-productos.component.scss'
})
export class VistaProductosComponent implements OnInit {
  productos: any[] = [];
  
  constructor(
    private productoService: VistaProductoService,
    private cartService: CartService

  ) {}

  ngOnInit() {
      this.productoService.obtenerProductos().subscribe(data => {
          this.productos = data;
      });
  }

  agregarAlCarrito(producto: any) {
      agregarAlCarrito(producto);
      console.log('Producto agregado al carrito:', producto);
      this.addToCart(producto);      
  }
 
  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }



}
