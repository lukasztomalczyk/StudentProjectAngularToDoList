import { Component, OnInit } from '@angular/core';
import {User} from "../../services/user";
import {FormBuilder, FormsModule, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User = null;

  constructor(private formBuilder: FormBuilder, formGroup: FormGroup) { }

  ngOnInit() {
  }

  login() {
    console.log()
  }
}
