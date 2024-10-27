import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {


  // injection de service "ProductsService" and "router"
  constructor( private productService:ProductsService, private router:Router ){}


  form = new FormGroup({

    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required)
    
  })


  submitForm(){
    console.log("submited...");

    // GET DATA FROM THE FORM
    const body = this.form.value;
    console.log(body);
 
    // CALL THE SERVICE
    this.productService.addProduct(body);

    // RESET FORM
   //  this.form.reset();


   // redirection !!!
   this.router.navigateByUrl('/home');



  }
}
