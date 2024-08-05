import { Component } from '@angular/core';

@Component({
  selector: 'app-load-mcq',
  templateUrl: './load-mcq.component.html',
  styleUrls: ['./load-mcq.component.css']
})
export class LoadMCQComponent {

  load:boolean=true;
  start:boolean=false;

  loadTest(){
    this.load=false;
  }

  startMCQTest(){
    this.start=true;
  }
}
