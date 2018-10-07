import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;
  isUserLogin: boolean = false;

  constructor() { }

  login(): void {
    this.isUserLogin = true;
  }
}
