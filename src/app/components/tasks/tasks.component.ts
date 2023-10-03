import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

import { TASK } from '../../TASK';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TASK[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: TASK) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: TASK) {
    console.log(task.reminder);
    task.reminder = !task.reminder;
    this.taskService.updateToggleReminder(task).subscribe()
  }

  addTask(task: TASK) {
    console.log(task)
    this.taskService
      .addTask(task)
      .subscribe(
        (task) => (this.tasks.push(task))
      );
  }
}
