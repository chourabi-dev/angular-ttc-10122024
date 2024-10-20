import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.css']
})

export class TeamDetailsPageComponent implements OnInit {
  id:any = "";

  // injection de service
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.route);

    this.id = this.route.snapshot.params['id'];

    
    
  }

}
