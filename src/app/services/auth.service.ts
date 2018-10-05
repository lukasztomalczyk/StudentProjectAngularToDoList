import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin: boolean = false;

  constructor() { }

  get isUserLogin() {
    return this.userLogin;
  }
}
