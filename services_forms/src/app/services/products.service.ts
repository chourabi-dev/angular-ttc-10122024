import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [];

  constructor() { }

  addProduct( product:any ){
    this.products.push(product);
  }


  getProducts(){
    return this.products;
  }



}
