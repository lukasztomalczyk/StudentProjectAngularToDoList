import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})

// https://stackoverflow.com/questions/50554585/angular-6-show-hide-element-with-ngif-doesnt-work

export class UserNavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  get autorize() {
    return this.auth.isUserLogin
  }
}
