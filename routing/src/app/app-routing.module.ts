import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ErrorComponent } from './pages/error/error.component';
import { TeamDetailsPageComponent } from './pages/team-details-page/team-details-page.component';
import { CompanyTabComponent } from './pages/company-tab/company-tab.component';
import { EmployeesTabComponent } from './pages/employees-tab/employees-tab.component';
import { DemoGuard } from './demo.guard';

const routes: Routes = [

 
  // here we define our routes
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomePageComponent },


  { path:'about', component:AboutPageComponent, children:[
    { path:'company', component:CompanyTabComponent },
    { path:'employees', component:EmployeesTabComponent },
    
  ] },


  { path:'team', component:TeamPageComponent  , canActivate:[ DemoGuard ]   },


  { path:'team/details/:id', component:TeamDetailsPageComponent },
  

  // wildcard
  { path:'**', component:ErrorComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
