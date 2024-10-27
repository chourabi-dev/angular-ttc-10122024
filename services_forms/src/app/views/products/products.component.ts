import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list:any[] = [];

  constructor( private service:ProductsService ) {}

  ngOnInit(): void {
    
    this.list = this.service.getProducts();
  }



}
