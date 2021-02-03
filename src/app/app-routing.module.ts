import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import {CostingComponent} from './costing/costing.component'

 const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'request', component: RequestComponent },
  { path: 'home', component: CostingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
