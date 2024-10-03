import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Obtener detalles de un producto específico
  getProductDetails(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }

  // Obtener todos los productos y sus detalles
  getProductsWithDetails(): Observable<any[]> {
    return this.getAllProducts().pipe(
      mergeMap(products => {
        // Crear un array de observables para obtener detalles de cada producto
        const productDetailRequests = products.map(product => 
          this.getProductDetails(product.id).pipe(
            map(detail => ({
              ...product,
              detail // Combinar el producto con sus detalles
            }))
          )
        );
        // Combinar todos los observables en uno solo
        return forkJoin(productDetailRequests);
      })
    );
  }
}