import { Component, Inject, OnInit } from '@angular/core';
import { agregarAlCarrito } from '../../estados/estado';

import { TarjetaProductoComponent } from "../tarjeta-producto/tarjeta-producto.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from '../../servicios/service.index';

@Component({ 
  selector: 'app-lista-productos',
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TarjetaProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent implements  OnInit {
  productsWithDetails: any[] = [];

  
  constructor(@Inject(ProductoService) private productService: ProductoService) {}

  ngOnInit(): void {
    this.productService.getProductsWithDetails().subscribe(
      (      data: any[]) => {
        this.productsWithDetails = data;
        console.log(this.productsWithDetails); // Puedes ver los datos en la consola
      },
      (      error: any) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
