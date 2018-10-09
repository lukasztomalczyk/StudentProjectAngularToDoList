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
              private authServices: AuthService,
              private route: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.submitted = true;

    if (this.userForm.invalid) { return; }

    if (this.authServices.login(this.userForm.controls.name.value,
        this.userForm.controls.password.value)) {
        this.route.navigate(['/Admin']);
      } else {
        this.userForm.controls.name.setErrors({'nomatch': true});
        this.userForm.controls.password.setErrors({'nomatch': true});
      }
  }
}
