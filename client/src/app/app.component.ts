<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
>>>>>>> 78b2622e97bf94603f722434319ef497f1aad0d8

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'App';
  users: any;
  constructor(private http: HttpClient) {

=======
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor (private http: HttpClient) {
    
>>>>>>> 78b2622e97bf94603f722434319ef497f1aad0d8
  }
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('completed request')
<<<<<<< HEAD
    });
  }

=======
    })
  }
>>>>>>> 78b2622e97bf94603f722434319ef497f1aad0d8
}
