import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LoginStudentComponent } from './user/Component/login-student/login-student.component';
import { RegisterStudentComponent } from './user/Component/register-student/register-student.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginStudentComponent,
    RegisterStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
