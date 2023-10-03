import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TASK } from '../../TASK';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TASK> = new EventEmitter();
  text!: string;
  day!: string;
  reminder!: boolean;
  showAddTask ?: boolean 
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('please add the task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    // @ to-do event emit
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
