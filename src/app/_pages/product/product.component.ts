import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    id!: number;
    product!: Product;

    constructor(private route:ActivatedRoute, private httpClient:HttpClient) {
      this.id = this.route.snapshot.params['productId'];
    }

    ngOnInit(): void {
      this.httpClient.get<Product>('/products/' + this.id)
        .subscribe(product => this.product = product)
    }

   /**
    * name
    */
   public name() {
    console.log('Product: ', this.product)
   }
}
