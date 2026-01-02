import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor(private router: Router) { }

  eventfunction() {
    this.router.navigate(['/event']);
    console.log("event button clicked");
  }
  counterApp(){
    this.router.navigate(['./counter'])
  }

  setGetInput(){
    this.router.navigate(['./setget'])
  }

  ifElse(){
    this.router.navigate(['./ifelse'])
  }
  

}
