import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogin = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.userLoged();
  }

  userLoged() {
    this.auth.currentUserAuth.subscribe(user => this.userLogin = user);
  }

}
