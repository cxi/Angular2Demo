import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  value ="";
  onClick(){
    this.title = 'The video is loading....';
  }

  onKey(event: any) { // without type info
    this.value += event.target.value + ' | ';
    console.log(this.value);
  }
  
  onEnter(value:string){
    this.value = value;
    console.log(this.value);
  }
}
