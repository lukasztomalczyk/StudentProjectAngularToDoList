import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-selected-project',
  templateUrl: './selected-project.component.html',
  styleUrls: ['./selected-project.component.css']
})
export class SelectedProjectComponent implements OnInit {

  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
