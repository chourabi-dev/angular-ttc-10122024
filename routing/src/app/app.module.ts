import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { ErrorComponent } from './pages/error/error.component';
import { TeamDetailsPageComponent } from './pages/team-details-page/team-details-page.component';
import { CompanyTabComponent } from './pages/company-tab/company-tab.component';
import { EmployeesTabComponent } from './pages/employees-tab/employees-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    TeamPageComponent,
    NavbarComponent,
    ErrorComponent,
    TeamDetailsPageComponent,
    CompanyTabComponent,
    EmployeesTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
