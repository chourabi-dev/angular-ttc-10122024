import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './views/promise/promise.component';
import { ObservableComponent } from './views/observable/observable.component';
import { HttpComponent } from './views/http/http.component';

const routes: Routes = [
  { path:'promise', component:PromiseComponent },
  { path:'observable', component:ObservableComponent },
  { path:'http', component:HttpComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
