import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestComponent } from './request/request.component';
import { CostingComponent } from './costing/costing.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {path: 'home',component: CostingComponent},
  {path: 'request',component: RequestComponent},
  {path: 'login',component: LoginComponent},
  {path: '', redirectTo: '/login',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestComponent,
    CostingComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
