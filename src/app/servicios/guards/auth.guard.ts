import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../../servicios/auth/login.service'; // Asegúrate de tener un servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService) {}

  canActivate(): boolean {
    return this.authService.isLoggedIn(); // Verifica si el usuario está autenticado
  }
}