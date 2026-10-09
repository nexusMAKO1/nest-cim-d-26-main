import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from './models/task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskSer: TasksService) { }

  @Get('')
  chercherTousLesTasks() {
    return this.taskSer.getAllTasks();
  }

  @Get(':id')
  chercherTaskParId(@Param('id') id: string) {
    return this.taskSer.getTaskById(parseInt(id, 10));
  }

  @Post('add')
  ajouterTask(@Body() newTask: Task) {
    return this.taskSer.addTask(newTask);
  }

  @Put('update/:id')
  modifierTask(
    @Param('id') id: string,
    @Body() updatedTask: Task,
  ) {
    return this.taskSer.updateTask(
      parseInt(id, 10),
      updatedTask,
    );
  }

  @Delete('delete/:id')
  supprimerTask(@Param('id') id: string) {
    return this.taskSer.deleteTask(
      parseInt(id, 10),
    );
  }
}