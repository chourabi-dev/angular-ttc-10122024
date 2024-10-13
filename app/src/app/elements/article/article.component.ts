import { Component, Input, OnInit } from '@angular/core';
import Article from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() data:Article = { id:0,title:"",content:"",nbrLikes:0 }   // input means that we are getting data from out parent

  constructor(){
    console.log(this.data); 
  }
  // cyle de vie => ngOnInit auto called
  ngOnInit(): void {
    console.log(this.data);
  }
 

}
