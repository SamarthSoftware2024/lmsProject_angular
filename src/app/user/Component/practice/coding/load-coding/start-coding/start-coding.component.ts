import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-start-coding',
  templateUrl: './start-coding.component.html',
  styleUrls: ['./start-coding.component.css']
})
export class StartCodingComponent {
  code: string = ''; // Variable to store the code from the text area
  output: string = ''; // Variable to store the output from the API
  error: string = ''; // Variable to store any errors from the API

  // JDoodle API credentials (replace with your actual credentials)
  private apiUrl = 'https://api.jdoodle.com/v1/execute';
  private clientId = 'YOUR_CLIENT_ID'; // Replace with your JDoodle client ID
  private clientSecret = 'YOUR_CLIENT_SECRET'; // Replace with your JDoodle client secret

  constructor(private http: HttpClient) {}
  alignCode(){
    alert("allign not implemented")
  }
  updateCode(){
    alert("update not implemented")
  }
  submitCode(){
    alert("submit not implemented")
  }
  // Method to compile code using JDoodle API
  compileCode(): void {
    this.sendRequest('compile');
  }

  // Method to run code using JDoodle API
  runCode(): void {
    this.sendRequest('run');
  }


  // Method to send request to JDoodle API
  private sendRequest(action: string): void {
    const payload = {
      script: this.code,
      language: 'java',
      versionIndex: '0', // You can change this according to the JDoodle API documentation
      clientId: this.clientId,
      clientSecret: this.clientSecret
    };

    // Set up headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Send HTTP POST request
    this.http.post<any>(this.apiUrl, payload, { headers }).pipe(
      catchError(error => {
        console.error('Error:', error);
        this.output = ''; // Clear previous output
        this.error = `Error: ${error.message}`;
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        if (action === 'compile') {
          // Handle compilation response
          if (response.error) {
            this.error = `Compilation Error: ${response.error}`;
            this.output = '';
          } else {
            this.output = `Compiled Successfully. Click Run to execute.`;
            this.error = '';
          }
        } else if (action === 'run') {
          // Handle execution response
          this.output = `Output:\n${response.output}`;
          this.error = `Errors:\n${response.error}`;
        }
      }
    });
  }
}
