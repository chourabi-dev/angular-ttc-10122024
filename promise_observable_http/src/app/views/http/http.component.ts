import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users:any[] = [];
  isLoading:boolean = false;

  constructor( private api:ApiService ){}


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.isLoading = true;

    this.api.getUsersFromServer().toPromise().then( (res:any)=>{
      console.log(res);

      this.users = res;
    
    } ).catch( (err:any)=>{
      console.log(err);
       
    }).finally(()=>{
      
      this.isLoading = false;
      
    })


  }


}
