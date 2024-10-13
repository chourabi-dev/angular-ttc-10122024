import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { SidemenuComponent } from './elements/sidemenu/sidemenu.component';
import { FooterComponent } from './elements/footer/footer.component';
import { ArticleComponent } from './elements/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
