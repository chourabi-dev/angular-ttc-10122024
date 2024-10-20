import { Component } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  teams:any[] = [
    {
      id:1,
      name:'Team 1',
      description:'This is team 1',
    },
    {
      id:2,
      name:'Team 2',
      description:'This is team 1',
    },
    {
      id:3,
      name:'Team 3',
      description:'This is team 1',
    },
    
  ]
}
