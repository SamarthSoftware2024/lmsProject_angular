import { Component } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent {

  ProgramOne(){
    alert("1 called");
  }
  ProgramTwo(){
    alert("2 called");
  }
  ProgramThree(){
    alert("3 called");
  }
  ProgramFour(){
    alert("4 called");
  }
  ProgramFive(){
    alert("5 called");
  }
}
