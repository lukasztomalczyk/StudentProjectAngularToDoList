import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogin = false;

  constructor() { }

  login(login: string, pasword: string): boolean {
    if (login === 'Admin' && pasword === 'admin') {
      this.isUserLogin = true;
      return true;
    } else {
      this.isUserLogin = false;
      return false;
    }
  }
}
