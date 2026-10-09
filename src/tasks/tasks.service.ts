import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TasksService {
  tabTasks: Task[] = [new Task(1, 'Task 1', 'Description 1', new Date())];

  getAllTasks() {
    return this.tabTasks;
  }

  getTaskById(id: number) {
    return this.tabTasks.find(task => task.id === id);
  }

  addTask(newTask: Task) {
    this.tabTasks.push(newTask);
  }

  updateTask(id: number, updatedTask: Task) {
    const index = this.tabTasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tabTasks[index] = updatedTask;
    }
  }

  deleteTask(id: number) {
    this.tabTasks = this.tabTasks.filter(task => task.id !== id);
  }
}
