import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../_models/Product";


@Injectable({
    providedIn: 'root'
})
export class ProductService {


    products$: Subject<Product[]> = new Subject<Product[]>();

    constructor(private httpClient: HttpClient) {}

    getProducts() {
        
        this.httpClient.get<any>('/products?limit=5&skip=5').subscribe(
            (resultats) => {
                this.products$.next(resultats.products);
            }
        );
    }
}