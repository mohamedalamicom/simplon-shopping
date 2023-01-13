
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, take } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('REQUETTE DEPUIS AUTH INTERCEPTOR ', req);

        return next.handle(req.clone({
            setHeaders: {'X-AUTH-TOKEN': 'token'}
        })).pipe(map(rep => {
            console.log('REPONSE DEPUIS AUTH INTERCEPTOR ', rep);
            return rep;
        }));
    }
}