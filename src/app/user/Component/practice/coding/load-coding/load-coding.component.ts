import { Component } from '@angular/core';

@Component({
  selector: 'app-load-coding',
  templateUrl: './load-coding.component.html',
  styleUrls: ['./load-coding.component.css']
})
export class LoadCodingComponent {

  oneProg:boolean=false;
  twoProg:boolean=false;
  threeProg:boolean=false;
  fourProg:boolean=false;
  fiveProg:boolean=false;
  start:boolean=false;
  ProgramOne(){
    this.oneProg=true;
  }
  ProgramTwo(){
    this.twoProg=true;
  }
  ProgramThree(){
    this.threeProg=true;
  }
  ProgramFour(){
    this.fourProg=true;
  }
  ProgramFive(){
    this.fiveProg=true;
  }
  startTest(){
    this.start=true;
    this.oneProg=false;
  }
}
