import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, retry, take, catchError } from "rxjs";


@Injectable()

export class UrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('REQUETTE DEPUIS URL INTERCEPTOR ', req);

        let request = req.clone({
            url: 'https://dummyjson.com' + req.url + '/error',
        })

        return next.handle(request).pipe(
            catchError(err => { throw new Error(err) } ),
            map(rep => {
            console.log('REPONSE DEPUIS URL INTERCEPTOR ', rep);
            return rep;
        })
        
        
        );
    }
}