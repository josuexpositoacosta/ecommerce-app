import { createAction, props } from '@ngrx/store';
import { Product } from '../modelos/product.model'; // Asegúrate de tener un modelo Product

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ productId: number }>()
);