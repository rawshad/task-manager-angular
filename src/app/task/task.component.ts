import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!:string;
  @Input() isDone!: boolean;

  @Output() deleteTask = new EventEmitter<void>();

  onDeleteTask() {
    this.deleteTask.emit();
  }
}
