import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import {project} from "./projects-menu/project";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient) {
  }

  private projectsUrl = 'https://beta.todoist.com/API/v8/projects';
  private headers = new HttpHeaders().set('Authorization', 'Bearer 9167fc0eadb744008afc14ca5d0757f454f17163')
    .set('Content-Type', 'application/json');

  getProjects(): Observable<HttpResponse<project[]>> {
    return this.http.get<project[]>(
      this.projectsUrl, {
        headers: this.headers,
        observe: 'response'
      });
  }

}


