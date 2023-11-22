import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';

  tasks: Task[]=[]
  constructor(private taskService: TaskService){}

  addTaskToList(){
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks)
  }
}
