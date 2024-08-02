import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  aptiVisible:boolean=false;
  MCQVisible:boolean=false;
  CodingVisible:boolean=false;
  GTOVisible:boolean=false;
  SQLVisible:boolean=false

  ApptitudeCall(){
    this.aptiVisible=true;
  }

  MCQCall(){
    this.MCQVisible=true;
  }
  CodingCall(){
    this.CodingVisible=true;
  }
  GTOCall(){
    this.GTOVisible=true;
  }
  SQLCall(){
    this.SQLVisible=true;
  }
}
