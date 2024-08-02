import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserComponent } from '../../user.component';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {

  studentId: number | undefined;
  user: UserComponent = new UserComponent();
  successMessage: string = '';
  errorMessage: string = '';
  dataInDB: any;

  constructor(private http: HttpClient) {}

  loginStudent() {
    if (this.studentId === undefined || !this.user.userName || !this.user.password) {
      this.errorMessage = 'Please fill all fields';
      this.successMessage = '';
      return;
    }

    this.http.post('http://localhost:8080/login/' + this.studentId, this.user, { responseType: 'text' })
      .subscribe(
        (data: string) => {
          console.log(data);
          
          if (data === 'failed') { 
            this.errorMessage = 'Failed to login';
            this.successMessage = '';
          } else {
            this.errorMessage = '';
            this.successMessage = data;
          }
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'Login failed';
          this.successMessage = '';
        }
      );
  }
}
