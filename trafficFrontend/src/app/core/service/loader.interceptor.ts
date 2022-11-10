import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }



  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.spinnerService.show();
    console.log("show spinner");
      return next.handle(req)
             .pipe(tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.spinnerService.hide();
                    }
                },
                (error) => {
                    this.spinnerService.hide();
                }));
  }
}
