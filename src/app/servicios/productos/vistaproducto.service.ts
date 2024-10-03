import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VistaProductoService {
    constructor(private http: HttpClient) {}

    obtenerProductos(): Observable<any[]> {
        return this.http.get<any[]>('https://fakestoreapi.com/products');
    }

    obtenerDetallesProducto(id: number): Observable<any> {
        return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
    }
}