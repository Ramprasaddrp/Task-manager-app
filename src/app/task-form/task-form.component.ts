import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title:string=""
  description:string=""
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}

  @Output()
  addTaskToList: EventEmitter<[]> = new EventEmitter<[]>()

  addTask(value:any): void {
    const uniqueId = new Date().getTime()
    this.task = { id: uniqueId, title: value.title, description: value.description, completed: false };
    this.taskService.addTask(this.task);
    this.addTaskToList.emit()
  }

}
