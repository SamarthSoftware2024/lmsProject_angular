import { Component } from '@angular/core';

@Component({
  selector: 'app-apptitude',
  templateUrl: './apptitude.component.html',
  styleUrls: ['./apptitude.component.css']
})
export class ApptitudeComponent {

  goBack:boolean=false;

  goBackButton(){
    this.goBack=true;
  }

}