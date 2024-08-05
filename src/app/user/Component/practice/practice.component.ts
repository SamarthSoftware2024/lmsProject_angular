import { Component } from '@angular/core';
import { UserComponent } from '../../user.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  user: UserComponent = new UserComponent();
  aptiVisible:boolean=false;
  MCQVisible:boolean=false;
  CodingVisible:boolean=false;
  GTOVisible:boolean=false;
  SQLVisible:boolean=false
  ineterviewVisible:boolean=false;

  ApptitudeCall(){
    this.aptiVisible=true;
    this.MCQVisible=false;
    this.CodingVisible=false;
    this.GTOVisible=false;
    this.SQLVisible=false;
    this.ineterviewVisible=false;
  }

  MCQCall(){
    this.MCQVisible=true;
    this.aptiVisible=false;
    this.CodingVisible=false;
    this.GTOVisible=false;
    this.SQLVisible=false;
    this.ineterviewVisible=false;
  }
  CodingCall(){
    this.CodingVisible=true;
    this.aptiVisible=false;
    this.MCQVisible=false;
    this.GTOVisible=false;
    this.SQLVisible=false;
    this.ineterviewVisible=false;
  }
  GTOCall(){
    this.GTOVisible=true;
    this.aptiVisible=false;
    this.MCQVisible=false;
    this.CodingVisible=false;
    this.SQLVisible=false;
    this.ineterviewVisible=false;
  }
  SQLCall(){
    this.SQLVisible=true;
    this.aptiVisible=false;
    this.MCQVisible=false;
    this.CodingVisible=false;
    this.GTOVisible=false;
    this.ineterviewVisible=false;
  }
  InterviewCall(){
    this.ineterviewVisible=true;
    this.SQLVisible=false;
    this.aptiVisible=false;
    this.MCQVisible=false;
    this.CodingVisible=false;
    this.GTOVisible=false;
  }
}
