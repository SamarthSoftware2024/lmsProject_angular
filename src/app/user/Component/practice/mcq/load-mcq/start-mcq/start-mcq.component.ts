import { Component } from '@angular/core';

@Component({
  selector: 'app-start-mcq',
  templateUrl: './start-mcq.component.html',
  styleUrls: ['./start-mcq.component.css']
})
export class StartMCQComponent {

  start: boolean = false;

  startTest() {
    this.start = true;
    alert("test started");
  }
}
