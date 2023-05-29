import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = ["task1", "task2", "task3", "task4"];
  onDeleteTask(index: number) {
    this.tasks.splice(index, 1);//using array.splice method. It takes the index number as parameter to delete the string and also takes another number parameter to define how many strings you want to delete
    //this.tasks.splice(index, 1, "string");you can also add another string parameter which will be replaced
  }
}
