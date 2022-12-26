import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products!: Product[];
  err!: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { 
    this.httpClient.get<any>('https://dummyjson.com/products?limit=5&skip=5').subscribe(
      (resultats) => {
        this.products = resultats.products;
       },
      (e) => {
        this.err = e.error.message;
      },
    );
  }

}
 