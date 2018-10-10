import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogin: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor() { }

  login(login: string, pasword: string): boolean {
    if (login === 'Admin' && pasword === 'admin') {
      this.setLoggedIn(true);
      return true;
    } else {
      this.setLoggedIn(false);
      return false;
    }
  }

  setLoggedIn(value: boolean) {
    localStorage.setItem('loggedIn', 'true');
  }
}
