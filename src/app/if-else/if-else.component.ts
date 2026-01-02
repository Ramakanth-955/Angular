import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css',
})
export class IfElseComponent {

  showMore: boolean = false
  showButton: boolean = true

  moreData(){
    this.showMore = true
    this.showButton = false
  }

  readLess(){
    this.showMore = false
    this.showButton = true
  }

}
