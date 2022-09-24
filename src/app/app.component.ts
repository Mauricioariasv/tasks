import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  title = 'task-app';

  constructor(private tasksService: TasksService){}

  showAppNotes: boolean = false;

  ngOnInit(): void {
    this.showAppNotes = (localStorage.getItem('notes')) ? true : false

    // Get tasks
    const tasks = localStorage.getItem('tasks') ?? '[]'
    this.tasksService.setTasks(JSON.parse(tasks))
  }

}