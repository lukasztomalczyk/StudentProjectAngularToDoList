import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogin: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  private authSource = new BehaviorSubject<boolean>(false);

  currentUserAuth = this.authSource.asObservable();

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
    localStorage.setItem('loggedIn', String(value));
      this.authSource.next(value);
  }
}
