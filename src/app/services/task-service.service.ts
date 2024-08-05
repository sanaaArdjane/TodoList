import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
private tasks:Task[]=[]
  constructor() { }
  getTasks():Observable<Task[]>{
    return of(this.tasks)

  }
addTask(task:Task):void{
  this.tasks.push(task)
}

deleteTask(taskId: number): void {
  this.tasks = this.tasks.filter(task => task.id !== taskId);
}
completeTask(taskId: number): void {
  const task = this.tasks.find(task => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
}

}
