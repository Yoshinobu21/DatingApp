import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './_services/account.service';
import { User } from './_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'App';
  users: any;
  constructor(private http: HttpClient, private accountService: AccountService) {

  }
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('completed request')
    });
  }
  

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user')!)
  }

}
