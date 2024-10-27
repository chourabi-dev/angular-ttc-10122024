import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  constructor() { }



  start(){
    this.startTrackingMyLocation().subscribe((data)=>{
      console.log(data); 
    },(err)=>{
      console.log(err); 
    })
  }



  startTrackingMyLocation(){
    console.log('Tracking my location...');

    let observable = new Observable( (watcher)=>{

      navigator.geolocation.watchPosition( (position)=>{
        watcher.next(position);
      },(err)=>{
        watcher.error(err);
      } );
     
    } ); 
    return observable;
  }
}
