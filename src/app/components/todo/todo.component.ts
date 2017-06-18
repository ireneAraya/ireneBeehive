import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo;
  @Output() sendCompletedTodo = new EventEmitter();

  completed = false;

  constructor() { }

  ngOnInit() {
  }

  onChecked(event) {
    this.completed = event.target.checked;
    this.todo.setCompleted(this.completed)
    console.log(event);
  }

}
