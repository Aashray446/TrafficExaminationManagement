import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {



    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {


            if(!environment.production) {
                   const cloned = req.clone({
                    headers: req.headers.set("Authorization",
                        "Bearer " + environment.token)
                });
                    return next.handle(cloned)
                }

        const idToken = localStorage.getItem("token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });
            console.log(cloned);
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
