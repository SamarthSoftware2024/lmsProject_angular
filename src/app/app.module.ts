import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LoginStudentComponent } from './user/Component/login-student/login-student.component';
import { RegisterStudentComponent } from './user/Component/register-student/register-student.component';
import { PracticeComponent } from './user/Component/practice/practice.component';
import { CodingComponent } from './user/Component/practice/coding/coding.component';
import { MCQComponent } from './user/Component/practice/mcq/mcq.component';
import { GTOComponent } from './user/Component/practice/gto/gto.component';
import { ApptitudeComponent } from './user/Component/practice/apptitude/apptitude.component';
import { SQLComponent } from './user/Component/practice/sql/sql.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginStudentComponent,
    RegisterStudentComponent,
    PracticeComponent,
    CodingComponent,
    MCQComponent,
    GTOComponent,
    ApptitudeComponent,
    SQLComponent
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
