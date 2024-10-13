import { Component } from '@angular/core';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  /*products:any[] = [
    {id:1, name:'Product 1', price:10.99},
    {id:2, name:'Product 2', price:9.99},
    50,
    "string"
  ]*/

    productsDATA:Product[] = [
      {id:1, name:'Product 1', price:10.99, quantity:100 },
      {id:1, name:'Product 1', price:10.99, quantity:200 },
      {id:1, name:'Product 1', price:10.99, quantity:0 },
      {id:1, name:'Product 1', price:10.99, quantity:0 },
      {id:1, name:'Product 1', price:10.99, quantity:50 },
      {id:1, name:'Product 1', price:10.99, quantity:90 }
    ];
 

}
