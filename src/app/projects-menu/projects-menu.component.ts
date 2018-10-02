import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css']
})
export class ProjectsMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class project {
  id: string;
  name: string;
  order: number;
  indent: number;
  comment_count: number
}
