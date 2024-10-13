import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  menus:any[] = [
    {name:'Dashboard', icon:'fa fa-dashboard', link:'/dashboard'},
    {name:'Users', icon:'fa fa-users', link:'/users'},
    {name:'Products', icon:'fa fa-product-hunt', link:'/products'},
    {name:'Orders', icon:'fa fa-shopping-cart', link:'/orders'},
    {name:'Reports', icon:'fa fa-file-text', link:'/reports'},

  ]

  
    


}
