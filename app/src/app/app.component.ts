import { Component } from '@angular/core';
import Article from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  articles:Article[]=[
    { id:1, title:"Angular springboot", content:"test", nbrLikes:120 },
    { id:2, title:"ReactJS", content:"test", nbrLikes:10 },
    { id:2, title:"ReactJS", content:"test", nbrLikes:10 },
    { id:2, title:"ReactJS", content:"test", nbrLikes:10 },
    { id:2, title:"ReactJS", content:"test", nbrLikes:10 },
    { id:2, title:"ReactJS", content:"test", nbrLikes:10 },
    { id:2, title:"ReactJS", content:"test", nbrLikes:10 },
    { id:2, title:"ReactJS", content:"test", nbrLikes:10 },
 
  ]
}
