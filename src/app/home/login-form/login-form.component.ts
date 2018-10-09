import { Component, OnInit } from '@angular/core';
import {User} from '../../services/user';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userForm: FormGroup;
  user: User = null;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              authServices: AuthService,
              route: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.userForm.controls;
  }

  login() {
    this.submitted = true;

    if (this.userForm.invalid) { return; }

    console.log(this.userForm.controls.name.value);
    console.log(this.userForm.controls.password.value);
  }
}
