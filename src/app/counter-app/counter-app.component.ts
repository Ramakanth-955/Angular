import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {

  appNumber: number =0;

  increment(){
    this.appNumber++;
  }

  decrement(){
    this.appNumber--;
  }

  reset(){
    this.appNumber=0;
  }

}
