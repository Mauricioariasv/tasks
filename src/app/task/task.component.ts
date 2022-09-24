import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/app.interfaces';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})

export class TaskComponent {

  @Input() task!: Task;

  constructor(private tasksService: TasksService){}

  get taskColor(): string {
    if(this.task.type === 'COMPLETED') {
      return 'bg-primary-green/30'
    } else if (this.task.type === 'PENDING'){
      return 'bg-yellow-400/30'
    } else {
      return 'bg-primary-red/30'
    }
  }

  updateTask(property: string, data: string){
    this.tasksService.updateTask(property, data, this.task.id)
  }

  deleteTask(){
    this.tasksService.deleteTask(this.task.id)
  }

  anchorTag(){
    this.tasksService.anchorTag(this.task.id, !this.task.important)
  }

}