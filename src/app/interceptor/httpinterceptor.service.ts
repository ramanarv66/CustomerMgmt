import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request intercepted')
    if (req.url.indexOf('authenticate') > 0) {
      return next.handle(req);
    }
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {

     
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })

    }
    return next.handle(req);
  }
}
