import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(){}


  ngOnInit(): void {

    this.takePhoto();

  }


  getCamera(){
    let promise = new Promise((  success,failure  )=>{
      setTimeout(() => {
        success(  { camera:true }  );
      }, 3000);
    }); 
    return promise;
  }


  async takePhoto(){
    console.log("taking photo just started..."); 
    let camera = await this.getCamera();
    console.log(camera);
    console.log('Taking photo');
  }

}
