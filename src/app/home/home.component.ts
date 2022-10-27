import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'Welcome to this zenika interview';
  userService: UserService;
  users: any;

  constructor(httpClient: HttpClient) {
    this.userService = new UserService(httpClient)
       this.users = this.userService.getUsers();
  }

  successInterview(index: number): void {
    this.userService.successInterview(this.users[index]);
    alert('Congratulations, you passed the interview');
  }
}
