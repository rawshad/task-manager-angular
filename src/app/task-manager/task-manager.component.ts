import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[] = [];
  taskId: number = null || 0;
  taskName: string = '';
  taskDescription: string = '';
  isEditMode: boolean = false;
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit(): void {
    this.loadTasks();
    
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.taskName.trim() && this.taskDescription.trim()) {
      const newTask: Task = {
        id: this.taskId,
        name: this.taskName,
        description: this.taskDescription,
        completed: false
      };
      this.taskService.addTask(newTask);
      this.loadTasks();
      this.clearForm();
    }
  }

  updateTask(): void {
    if (this.selectedTask) {
      this.taskService.updateTask(this.selectedTask);
      this.loadTasks();
      this.clearForm();
    }
  }

  deleteTask(task: Task): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task);
      this.loadTasks();
    }
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
  }

  editTask(task: Task): void {
    this.isEditMode = true;
    this.selectedTask = task;
    this.taskName = task.name;
    this.taskDescription = task.description;
  }

  clearForm(): void {
    this.isEditMode = false;
    this.selectedTask = null;
    this.taskName = '';
    this.taskDescription = '';
  }

}
