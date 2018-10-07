import { Component, OnInit } from '@angular/core';
import {User} from "../../services/user";
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userForm: FormGroup;
  user: User = null;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.userForm.value.name)
  }
}
