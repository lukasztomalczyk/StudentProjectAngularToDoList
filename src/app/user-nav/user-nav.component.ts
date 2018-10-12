import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../services/user';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})

// https://stackoverflow.com/questions/50554585/angular-6-show-hide-element-with-ngif-doesnt-work

export class UserNavComponent implements OnInit {

  userForm: FormGroup;
  user: User = null;
  submitted = false;
  userLogin = false;

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
        this.userLogin = true;
      } else {
        this.userForm.controls.name.setErrors({'nomatch': true});
        this.userForm.controls.password.setErrors({'nomatch': true});
        this.userLogin = false;
      }
  }
}
