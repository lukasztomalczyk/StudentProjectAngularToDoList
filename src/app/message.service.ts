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


  getProjects(): Observable<HttpResponse<project[]>> {
    return this.http.get<project[]>(
      this.projectsUrl, {
        headers: new HttpHeaders().set('Authorization', 'Bearer 9167fc0eadb7')
          .set('Content-Type', 'application/json'),
        observe: 'response'
      });
  }

}


