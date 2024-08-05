import { Component } from '@angular/core';
import { Task, TaskServiceService } from '../services/task-service.service';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor,FormsModule,NgClass],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
tasks:Task[]=[]
task:string=""
constructor(private taskService:TaskServiceService){}
ngOnInit() {
  this.taskService.getTasks().subscribe(tasks => {
    this.tasks = tasks;
  });
}
addTask() {
  if (this.task.trim()) {
    this.taskService.addTask({ id: Date.now(), title: this.task, completed: false });
    this.task = "";
    this.updateTaskList();
  }
}
deleteTask(taskId: number) {
  this.taskService.deleteTask(taskId);
  this.updateTaskList();
}

completeTask(taskId: number) {
  this.taskService.completeTask(taskId);
  this.updateTaskList();
}
private updateTaskList() {
  this.taskService.getTasks().subscribe(tasks => {
    this.tasks = tasks;
  });
}

}
