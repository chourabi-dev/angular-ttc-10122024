import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent {

  amount:number = 241541321651;
  date:Date = new Date();
  name:string = "john doe";
  nameLower = "john doe";
  nameUpper = "JOHN DOE";
  price:number = 1651616516;

  userEmail:string="tchourabi@gmail.com";
  userEmail2:string="demo@yahoo.com";
  

}
