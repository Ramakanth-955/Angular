import { Component } from '@angular/core';

@Component({
  selector: 'app-set-get-input',
  imports: [],
  templateUrl: './set-get-input.component.html',
  styleUrl: './set-get-input.component.css',
})
export class SetGetInputComponent {

  name: string = "Ramakanth Reddy";


  getName(value: string){
    this.name = value;
  }


}
