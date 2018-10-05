import {Component, OnInit} from '@angular/core';
import {MessageService} from "../message.service";
import {project} from "./project";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css']
})
export class ProjectsMenuComponent implements OnInit {

  projects: project[];
  httpResponse: HttpResponse<project[]>;

  constructor(private messageServices: MessageService) {
  }

  ngOnInit() {
    this.loadProject();
  }

  loadProject(): void {
    this.messageServices.getProjects().subscribe(data => {
      this.projects = data.body;
    });
  }
}

