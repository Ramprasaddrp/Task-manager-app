import { Component, Input } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  title: string=""
  description:string =""
  editor:boolean=false

  @Input()
  tasks: Task[]=[]
  
  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks)
  }

  onClickDelete(id:number): void{
    this.tasks=this.taskService.deleteTask(id)
  }

  onUpdateStatus(id:number):void{
    this.tasks= this.taskService.updateStatus(id)
  }

  
  onChangeTitle(event:any){
    this.title= event
    console.log(event)
  }
  onChangeDescription(event:any){
    this.description= event
    console.log(event)
  }
  
  editDetails(id:number):void{
    if (this.editor){
      this.taskService.updateDetails(id,this.title,this.description)
      this.editor=!this.editor
    }
    else{
      this.editor = !this.editor
    }
  }

}
