import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lmsProject';

  loginState:boolean=false;
  registerState:boolean=false;

  login(){
    this.loginState=true;
    alert("lpgin called");
  }
  register(){
    this.registerState=true;
    alert("register called");
  }
}
