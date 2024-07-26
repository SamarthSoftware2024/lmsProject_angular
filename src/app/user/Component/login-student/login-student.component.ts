import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {

  
  login(){
    alert("login studnet")
  }

  studentId: number | undefined; // property to store the student ID entered by user
  successMessage: string = '';
  errorMessage: string = '';
  dataInDB: any;

  constructor(private http: HttpClient) {}

  loginStudent() {
    // Ensure studentId is defined and not empty
    if (!this.studentId) {
      this.errorMessage = 'Please enter a Student ID';
      this.successMessage = '';
      return;
    }

    // Make the HTTP POST request to fetch student data
    this.http.post('http://localhost:8080/login/' + this.studentId, {}).subscribe(
      (data: any) => {
        if (data === false) {
          console.log(data);
          this.errorMessage = 'failed to login';
          this.successMessage = '';
        } else {
          console.log(data);
          this.successMessage = 'login successfully';
          this.errorMessage = '';
          this.dataInDB = data;
        }
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'login failed';
        this.successMessage = '';
      }
    );
  }

}
