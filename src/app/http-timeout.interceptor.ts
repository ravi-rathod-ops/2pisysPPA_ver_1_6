// http-timeout.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable, TimeoutError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class HttpTimeoutInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const timeoutValue = 30000; // 30 seconds

    return next.handle(req).pipe(
      timeout(timeoutValue),
      catchError(error => {
        if (error instanceof TimeoutError) {
          console.error('Timeout has occurred', req.url);
          return throwError(() => new Error('Server timeout'));
        }
        return throwError(() => error);
      })
    );
  }
}