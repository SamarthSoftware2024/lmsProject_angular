import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-start-coding',
  templateUrl: './start-coding.component.html',
  styleUrls: ['./start-coding.component.css']
})
export class StartCodingComponent {
  code: string = `public class SamarthSoftware  
{  
    public static void main(String args[])   
    {  
        // Your Java code here
    }  
}`; // Initialize with default Java code
  output: string = ''; // Variable to store the output from the API
  error: string = ''; // Variable to store any errors from the API

  // JDoodle API credentials (replace with your actual credentials)
  private apiUrl = 'https://api.jdoodle.com/v1/execute';
  private clientId = 'YOUR_ACTUAL_CLIENT_ID'; // Replace with your JDoodle client ID
  private clientSecret = 'YOUR_ACTUAL_CLIENT_SECRET'; // Replace with your JDoodle client secret

  constructor(private http: HttpClient) {}

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
      versionIndex: '0', // Ensure this is correct for JDoodle API
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

  // Placeholder methods for other buttons
  alignCode(): void {
    // Add code formatting logic if needed
  }

  updateCode(): void {
    // The code is already bound to the `code` property
    // Display code or handle it as needed
    console.log(this.code);
  }

  submitCode(): void {
    alert('Submit functionality is not implemented.');
  }
}
