import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { TASK } from '../../TASK';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task !: TASK;
  @Output() onDeleteTask: EventEmitter<TASK> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<TASK> = new EventEmitter()
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void { }
  onDelete(task:TASK) {
    this.onDeleteTask.emit(task)
  }
  onToggle(task:TASK) {
    console.log('task: ---> ',task)
    this.onToggleReminder.emit(task)
  }

}