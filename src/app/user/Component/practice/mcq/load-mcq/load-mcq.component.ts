import { Component } from '@angular/core';

@Component({
  selector: 'app-load-mcq',
  templateUrl: './load-mcq.component.html',
  styleUrls: ['./load-mcq.component.css']
})
export class LoadMCQComponent {

  load:boolean=true;

  loadTest(){
    this.load=false;
  }
}
