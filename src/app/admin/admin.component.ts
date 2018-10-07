import {Component, Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements CanActivate {

  constructor(
    private _auth: AuthService,
    private _router: Router) {}

  canActivate(): boolean{
    if (this._auth.isUserLogin) { return true }

      this._router.navigate(['/Home']);
      return false;
  }

}
