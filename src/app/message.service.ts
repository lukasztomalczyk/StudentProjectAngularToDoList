import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {project} from "./projects-menu/project";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  private projectsUrl = 'https://beta.todoist.com/API/v8/projects';
  private messageHeader = { headers:
    new HttpHeaders({'Authorization': 'Bearer 9167fc0eadb744008afc14ca5d0757f454f17163'})
  };


  getProjects(): Observable<project[]> {
    return this.http.get<project[]>(this.projectsUrl, this.messageHeader);
  }
}


