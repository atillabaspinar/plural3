import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

  currentUser: IUser = null;
  constructor() { }

  loginUser(username: string, password: string) {

    this.currentUser = {
      id: 1,
      firstName: 'john',
      lastName: 'papa',
      userName: username
    };

  }

  isAuthenticated() {

    return !!this.currentUser;
  }
}
