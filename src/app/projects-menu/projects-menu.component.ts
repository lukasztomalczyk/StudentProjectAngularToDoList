import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MessageService} from '../services/message.service';
import {Project} from './project';
import {HttpResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css']
})
export class ProjectsMenuComponent implements OnInit {

  projects: Project[];
  // httpResponse: HttpResponse<Project[]>;

  constructor(private messageServices: MessageService,
            private data: DataService) {
  }

  ngOnInit() {
    this.loadProject();
  }

  loadProject(): void {
    this.messageServices.getProjects().subscribe(data => {
      this.projects = data.body;
    });
  }


  selectProject(id: number): void {
    this.data.changeMessage(id.toString());
  }
}

