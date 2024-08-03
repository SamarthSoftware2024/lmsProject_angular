import { HttpClient } from '@angular/common/http';
import { Component,Output,EventEmitter} from '@angular/core';
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
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }
  @Output() showDataEvent= new EventEmitter<boolean>();
  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  loginStudent = () => {
    if (this.studentId === undefined || !this.user.userName || !this.user.password) {
      this.errorMessage = 'Please fill all fields';
      this.successMessage = '';
      return;
    }

    this.http.post('http://localhost:8080/login/' + this.studentId, this.user, { responseType: 'text' })
      .subscribe(
        async (data: string) => {
          console.log(data);

          if (data !== 'login successfully') {
            this.errorMessage = data;
            this.successMessage = '';
            this.isLoggedIn = false;
          } else {
            this.errorMessage = '';
            this.successMessage = data;
            this.isLoggedIn = true;
            await this.delay(2000);
            this.showDataEvent.emit(false);
          }
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'Login failed';
          this.successMessage = '';
          this.isLoggedIn = false;
        }
      );
  }
}
