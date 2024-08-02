import { Component } from '@angular/core';
import { UserComponent } from '../../user.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent {

  studentId: number | undefined;
  user: UserComponent = new UserComponent();
  successMessage: string = '';
  errorMessage: string = '';
  dataInDB: any;

  constructor(private http: HttpClient) {}

  register() {
    if ( !this.user.userName || !this.user.password) {
      this.errorMessage = 'Please fill all fields';
      this.successMessage = '';
      return;
    }

    this.http.post('http://localhost:8080/register', this.user, { responseType: 'text' })
      .subscribe(
        (data: string) => {
          console.log(data);
          
          if (data === 'failed') { 
            this.errorMessage = 'Failed to register';
            this.successMessage = '';
          } else {
            this.errorMessage = '';
           this.successMessage = data;
          }
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'register failed';
          this.successMessage = '';
        }
      );
  }
}
