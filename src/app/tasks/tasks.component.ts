import { Component } from '@angular/core';
import { Task } from '../interfaces/app.interfaces';
import { TasksService } from '../tasks.service';
import { v4 as uuidv4 } from 'uuid';

class MyTask implements Task{
  title: string = ''
  content: string = ''
  type: string = 'PENDING'
  date: Date = new Date()
  id: string = uuidv4()
  important: boolean = false
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent {

  get tasks(): Task[] {
    return this.tasksService.tasks
  }

  constructor(private tasksService: TasksService){}

  getTasks(type: string){
    if(!['CANCELED', 'PENDING', 'COMPLETED'].includes(type)) {
      throw new Error("Set a valid task type");
    }

    let tasks = this.tasks.filter(t => t.type === type)

    if(type === 'PENDING') {
      tasks = tasks.sort( (a, b) => Number(b.important) - Number(a.important))
    }
  
    return tasks
  }

  addTask() {
    const task = new MyTask()
    this.tasksService.addTask(task)
  }

}