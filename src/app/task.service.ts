import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = []

  getTasks(): Task[] {
    return this.tasks;
  }
  addTask(task: Task): void {
    this.tasks.push(task);
    console.log(this.tasks)
  }
  deleteTask(id:number):Task[]{
   this.tasks = this.tasks.filter(eachItem=>eachItem.id !== id)
   return this.tasks
  }

  updateStatus(id:number):Task[]{
    this.tasks = this.tasks.map(eachItem=>{
      if(eachItem.id === id){
        const  task:Task = {
          id:eachItem.id,
          title:eachItem.title,
          description:eachItem.description,
          completed:!eachItem.completed
        }
        return task
      }
      return eachItem
    })
    return this.tasks
  }

  updateDetails(id:number, title:string, description:string){
    this.tasks = this.tasks.map(eachItem=>{
      if(eachItem.id === id){
        const  task:Task = {
          id:eachItem.id,
          title:title,
          description:description,
          completed:eachItem.completed
        }
        return task
      }
      return eachItem
    })
    return this.tasks
  }
}
