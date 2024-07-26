import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
