import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './elements/products/products.component';
import { DemoPipeComponent } from './elements/demo-pipe/demo-pipe.component';
import { EmailPipe } from './pipes/email.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DemoPipeComponent,
    EmailPipe 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
