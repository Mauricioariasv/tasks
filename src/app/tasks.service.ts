import { Injectable } from '@angular/core';
import { Task } from './interfaces/app.interfaces';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  tasks: Task[] = []

  setTasks(tasks: Task[]){
    this.tasks = tasks
  }

  addTask(task: Task){
    this.tasks.unshift(task)
    this.saveTasks()
  }

  updateTask(property: string, data: string, id: string){
    switch(property) {
      case 'title':
        this.tasks.find(t => t.id === id)!.title = data
        break;
      case 'content':
        this.tasks.find(t => t.id === id)!.content = data
        break;
      case 'type':
        this.tasks.find(t => t.id === id)!.type = data
        break;
    }

    this.saveTasks()
  }

  deleteTask(id: string){
    this.tasks = this.tasks.filter(t => t.id !== id)
    this.saveTasks()
  }

  anchorTag(id: string, anchor: boolean){
    const taskIndex = this.tasks.indexOf(this.tasks.find(t => t.id === id)!)
    const [task] = this.tasks.splice(taskIndex, 1);

    task.important = anchor;

    (anchor) 
      ? this.tasks.unshift(task)
      : this.tasks.push(task)
    
    this.saveTasks()
  }

  saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}