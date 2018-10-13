import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from './task';
import { MessageService } from '../services/message.service';
import {HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-selected-project',
  templateUrl: './selected-project.component.html',
  styleUrls: ['./selected-project.component.css']
})
export class SelectedProjectComponent implements OnInit {

  message: string;
  allTask: Task[];
  dataArray: string[];
  selectedTasks: Task[];

  constructor(private data: DataService,
              private messageServices: MessageService) { }

  ngOnInit() {
    this.loadTasks();
    this.selectedTask();
  }

  loadTasks(): void {
    this.messageServices.getAlltasks().subscribe(sub => {
      this.allTask = sub.body; });
  }

  selectedTask() {
    this.data.currentMessage.subscribe(message => { this.message = message;
      this.dataArray = this.message.split('.');
      this.getSelectedTask(+this.dataArray[0]); });
  }

  getSelectedTask(id: number): void {
    if (id) {
       this.selectedTasks = this.allTask.filter(u => u.project_id === id);
    }
  }

}
