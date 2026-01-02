import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from './event/event';
import { LoginPage } from './login-page/login-page';
import { HomeComponent } from './home/home.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { SetGetInputComponent } from './set-get-input/set-get-input.component';
import { IfElseComponent } from './if-else/if-else.component';

const routes: Routes = [
  { path : '', component: LoginPage },
  { path : 'event', component: Event },
  { path : 'home', component: HomeComponent},
  { path : 'counter', component: CounterAppComponent },
  { path : 'setget', component: SetGetInputComponent },
  { path : 'ifelse', component: IfElseComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
