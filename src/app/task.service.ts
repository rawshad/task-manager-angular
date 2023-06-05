import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    // const index = this.tasks.findIndex(task => task.name === updatedTask.name);
    // if (index !== -1) {
    //   this.tasks[index] = updatedTask;
    // }
    console.log(updatedTask);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.name === task.name);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
