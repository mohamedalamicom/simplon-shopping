import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Product } from 'src/app/_models/Product';
import { ProductService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[]; // les produits affichés
  err!: string;
  
  subject: ReplaySubject<number> = new ReplaySubject<number>(5);

  constructor(private productService:ProductService) { }

  ngOnInit() { 
    this.productService.products$.subscribe(products => {
      console.log('REPONSE DEPUIS OBSERVER ', products)
      this.products = products
    });
    this.productService.getProducts();
  }

}
 