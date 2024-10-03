import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../notification/notification.service';


@Injectable()
export class CustomHeaderInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clonar la solicitud y agregar un nuevo header
    const clonedRequest = req.clone({
      headers: req.headers.set('Custom-Header', 'YourHeaderValue')
    });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejar errores aquí
        this.notificationService.showError('Ocurrió un error: ' + error.message);
        return throwError(error);
      })
    );
  }
}




