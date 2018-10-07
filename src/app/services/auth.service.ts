import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogin: boolean = false;

  constructor() { }

  login(): void {
    this.isUserLogin = true;
  }
}
