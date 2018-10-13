import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MessageService} from '../services/message.service';
import {Project} from './project';
import {Task} from '../selected-project/task';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css']
})
export class ProjectsMenuComponent implements OnInit {

  projects: Project[];
  allTask: Task[];
  count = 0;
  // httpResponse: HttpResponse<Project[]>;

  constructor(private messageServices: MessageService,
            private dataServices: DataService) {
  }

  ngOnInit() {
    this.loadTasks();
    this.loadProject();
  }

  loadProject(): void {
    this.messageServices.getProjects().subscribe(data => {
      this.projects = data.body;
   //   this.dataServices.changeMessage(String(this.projects[0].id) + '.' + String(this.projects[0].name));
    });
  }

  loadTasks(): void {
    this.messageServices.getAlltasks().subscribe(data => {
      this.allTask = data.body;
    });
  }

  countTask(id: number): number {
    if (!id && !this.allTask) {
      return 0;
    }
  //  console.log(this.count++);
      return this.allTask.filter(x => x.project_id === id).length;
  }

  selectProject(id: number, value: string): void {
    this.dataServices.changeMessage(id.toString() + '.' + value);
  }
}

