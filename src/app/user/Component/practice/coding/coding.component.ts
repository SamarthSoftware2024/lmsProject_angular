import { Component } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent {

    load:boolean=false;

    loadCoding(){
      this.load=true;
    }
}
