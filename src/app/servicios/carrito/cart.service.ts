import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../estados/cart.actions';
import { CartState } from '../../estados/cart.reducer';
import { map, Observable } from 'rxjs';
import { Product } from '../../modelos/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store<{ cart: CartState }>) {}

  addProduct(product: any) {
    this.store.dispatch(addToCart({ product }));
  }

  removeProduct(productId: any) {
    this.store.dispatch(removeFromCart({ productId }));
  }

/*  getCartProducts(): Observable<Product[]> {
    return this.store.select(state => state.cart.products);
  }
*/
  getCartProducts(): Observable<Product[]> {
    return this.store.select(state => state.cart.products).pipe(
      // Manejo de errores si el estado es undefined
      map((products: any) => products || [])
    );
  }


}