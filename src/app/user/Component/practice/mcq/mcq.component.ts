import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class MCQComponent {
  attemptMCQ:boolean=false;

  MCQAttempt(){
    this.attemptMCQ=true;
  }

}
