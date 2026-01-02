import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {

  getdata(text: string) {
    console.log(text)
  }

  onHover(){
    alert("Mouse Hover")
  }
  onLeave(){
    alert("Mouse leave")
  }

  onClick(val : string){
    alert(val)
  }
}
