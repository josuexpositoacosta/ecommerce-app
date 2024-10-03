import { signal } from '@angular/core';

export const itemsCarrito = signal<any[]>([]);

export function agregarAlCarrito(item: any) {
    itemsCarrito.update(actual => [...actual, item]);
}

export function eliminarDelCarrito(itemId: number) {
    itemsCarrito.update(actual => actual.filter(item => item.id !== itemId));
}