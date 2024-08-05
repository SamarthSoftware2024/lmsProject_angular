import { Component } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent {

  javaState:boolean=false;
  angularState:boolean=false;
  reactState:boolean=false;
  javaScriptState:boolean=false;
  htmlState:boolean=false;
  cssState:boolean=false;
  mysqlState:boolean=false;

  javaCall(){
    this.javaState=true;
    this.angularState=false;
    this.reactState=false;
    this.javaScriptState=false;
    this.htmlState=false;
    this.cssState=false;
    this.mysqlState=false;
  }
  angularCall(){
    this.javaState=false;
    this.angularState=true;
    this.reactState=false;
    this.javaScriptState=false;
    this.htmlState=false;
    this.cssState=false;
    this.mysqlState=false;
  }
  reactCall(){
    this.javaState=false;
    this.angularState=false;
    this.reactState=true;
    this.javaScriptState=false;
    this.htmlState=false;
    this.cssState=false;
    this.mysqlState=false;
  }
  javaScriptCall(){
    this.javaState=false;
    this.angularState=false;
    this.reactState=false;
    this.javaScriptState=true;
    this.htmlState=false;
    this.cssState=false;
    this.mysqlState=false;
  }
  htmlCall(){
    this.javaState=false;
    this.angularState=false;
    this.reactState=false;
    this.javaScriptState=false;
    this.htmlState=true;
    this.cssState=false;
    this.mysqlState=false;
  }
  cssCall(){
    this.javaState=false;
    this.angularState=false;
    this.reactState=false;
    this.javaScriptState=false;
    this.htmlState=false;
    this.cssState=true;
    this.mysqlState=false;
  }
  mysqlCall(){
    this.javaState=false;
    this.angularState=false;
    this.reactState=false;
    this.javaScriptState=false;
    this.htmlState=false;
    this.cssState=false;
    this.mysqlState=true;
  }

}
