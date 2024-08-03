import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lmsProject';
  user: UserComponent=new UserComponent();

  loginState:boolean=false;
  registerState:boolean=false;

  login(){
    this.loginState=true;
    this.registerState=false;
  }
  register(){
    this.registerState=true;
    this.loginState=false;
  }

}